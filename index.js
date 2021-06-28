const app = require('express')();
const PORT = 4141;
app.use('/*', (req, res) => {
  res.send(`made a call at ${req.path}`);
});

const logger = function (req, res, next) {
  console.log(req.url);
  next(); // Passing the request to the next handler in the stack.
};
app.use(logger);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
