const { GoogleAuth } = require('google-auth-library');

const PROPERTY_ID = '538698260';
const GA4_URL = `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runReport`;

async function getToken() {
  const credentials = JSON.parse(
    Buffer.from(process.env.GA_CREDENTIALS, 'base64').toString('utf8')
  );
  const auth = new GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
  });
  const client = await auth.getClient();
  const { token } = await client.getAccessToken();
  return token;
}

async function gaReport(token, body) {
  const res = await fetch(GA4_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.json();
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const token = await getToken();

    const [overview, chart, pages, sources, devices] = await Promise.all([
      gaReport(token, {
        dateRanges: [
          { startDate: 'today', endDate: 'today' },
          { startDate: '7daysAgo', endDate: 'today' },
          { startDate: '30daysAgo', endDate: 'today' },
        ],
        metrics: [
          { name: 'activeUsers' },
          { name: 'sessions' },
          { name: 'keyEvents' },
          { name: 'averageSessionDuration' },
          { name: 'bounceRate' },
        ],
      }),
      gaReport(token, {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'date' }],
        metrics: [{ name: 'activeUsers' }, { name: 'sessions' }],
        orderBys: [{ dimension: { dimensionName: 'date' } }],
      }),
      gaReport(token, {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }, { name: 'pageTitle' }],
        metrics: [{ name: 'screenPageViews' }, { name: 'activeUsers' }],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 8,
      }),
      gaReport(token, {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'sessionDefaultChannelGroup' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 6,
      }),
      gaReport(token, {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'deviceCategory' }],
        metrics: [{ name: 'activeUsers' }],
        orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
      }),
    ]);

    res.status(200).json({ overview, chart, pages, sources, devices, ts: Date.now() });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
