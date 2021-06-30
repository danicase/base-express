const express = require('express');
const path = require('path');
const PORT = 8080;
const app = express();
const healthCheck = express();

const logger = function (req, res, next) {
  console.log(req.url);
  next();
};
app.use(logger);
healthCheck.use(logger);

healthCheck.get('/health', (req, res) => {
  res.send(JSON.stringify({ status: 'ok' }));
});

app.use('/test', (req, res) => {
  console.log(req.headers);
  const xAmznTraceId = req.header('x-amzn-trace-id');
  const xAmznOidcData = req.header('x-amzn-oidc-data');
  const xAmznOidcIdentity = req.header('x-amzn-oidc-identity');
  const xAmznOidcAccesstoken = req.header('x-amzn-oidc-accesstoken');
  res.send(
    JSON.stringify({
      xAmznOidcData,
      xAmznTraceId,
      xAmznOidcIdentity,
      xAmznOidcAccesstoken,
    })
  );
});

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
healthCheck.listen(8081, () => console.log('healthCheck done at port 8081'));
