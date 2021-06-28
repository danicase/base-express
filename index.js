const express = require('express');
const PORT = 8080;
const app = express();
const healthCheck = express();

healthCheck.get('*', (req, res) => {
  res.send(JSON.stringify({ status: 'ok' }));
});
healthCheck.listen(80);

const logger = function (req, res, next) {
  console.log(req.url);
  next(); // Passing the request to the next handler in the stack.
};
app.use(logger);

app.use('/*', (req, res) => {
  res.send(`made a call at ${req.url}`);
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
