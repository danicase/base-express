const express = require('express');
const PORT = 8080;
const app = express();
const healthCheck = express();

const logger = function (req, res, next) {
  console.log(req.url);
  next(); // Passing the request to the next handler in the stack.
};
app.use(logger);
healthCheck.use(logger);

healthCheck.get('/health', (req, res) => {
  res.send(JSON.stringify({ status: 'ok' }));
});

app.use('/*', (req, res) => {
  res.send(`made a call at ${req.url}`);
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
healthCheck.listen(8081, () => console.log('healthCheck done at port 8081'));
