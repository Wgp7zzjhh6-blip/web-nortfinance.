const { GoogleAuth } = require('google-auth-library');

const PROPERTY_ID = '538698260';
const GA4_URL = `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runReport`;
const GA4_RT_URL = `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runRealtimeReport`;

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

async function gaRealtime(token, body) {
  const res = await fetch(GA4_RT_URL, {
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

    const [overview, chart, pages, sources, devices, cities, events, realtime, leadEvents] = await Promise.all([
      // KPIs: hoy / 7 días / 30 días
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
          { name: 'newUsers' },
        ],
      }),
      // Gráfico 30 días
      gaReport(token, {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'date' }],
        metrics: [{ name: 'activeUsers' }, { name: 'sessions' }],
        orderBys: [{ dimension: { dimensionName: 'date' } }],
      }),
      // Páginas top
      gaReport(token, {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'screenPageViews' }, { name: 'activeUsers' }, { name: 'averageSessionDuration' }],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 8,
      }),
      // Fuentes de tráfico
      gaReport(token, {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'sessionDefaultChannelGroup' }],
        metrics: [{ name: 'sessions' }, { name: 'activeUsers' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 6,
      }),
      // Dispositivos
      gaReport(token, {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'deviceCategory' }],
        metrics: [{ name: 'activeUsers' }],
        orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
      }),
      // Ciudades top
      gaReport(token, {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'city' }],
        metrics: [{ name: 'activeUsers' }, { name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
        limit: 8,
        dimensionFilter: {
          filter: {
            fieldName: 'country',
            stringFilter: { matchType: 'EXACT', value: 'Spain' },
          },
        },
      }),
      // Eventos por tipo (últimos 30 días)
      gaReport(token, {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'eventName' }],
        metrics: [{ name: 'eventCount' }],
        orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
        limit: 20,
      }),
      // Tiempo real
      gaRealtime(token, {
        metrics: [{ name: 'activeUsers' }],
      }),
      // Lead events por día (últimos 30 días) — key_events o contact/simulador
      gaReport(token, {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'date' }, { name: 'eventName' }],
        metrics: [{ name: 'eventCount' }],
        orderBys: [{ dimension: { dimensionName: 'date' }, desc: true }],
        limit: 60,
        dimensionFilter: {
          orGroup: {
            expressions: [
              { filter: { fieldName: 'eventName', stringFilter: { matchType: 'CONTAINS', value: 'contact' } } },
              { filter: { fieldName: 'eventName', stringFilter: { matchType: 'CONTAINS', value: 'form' } } },
              { filter: { fieldName: 'eventName', stringFilter: { matchType: 'CONTAINS', value: 'submit' } } },
              { filter: { fieldName: 'eventName', stringFilter: { matchType: 'CONTAINS', value: 'lead' } } },
              { filter: { fieldName: 'eventName', stringFilter: { matchType: 'CONTAINS', value: 'simulad' } } },
              { filter: { fieldName: 'eventName', stringFilter: { matchType: 'CONTAINS', value: 'hipotec' } } },
            ],
          },
        },
      }),
    ]);

    res.status(200).json({
      overview, chart, pages, sources, devices, cities, events, realtime, leadEvents,
      ts: Date.now()
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
