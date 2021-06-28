const app = require('express')();
const PORT = 4141;

const logger = function (req, res, next) {
  console.log(req.url);
  next(); // Passing the request to the next handler in the stack.
};
app.use(logger);

app.use('/*', (req, res) => {
  res.send(`made a call at ${req.path}`);
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
