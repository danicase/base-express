const app = require('express')();
const PORT = 3000;
app.use('/*', (req, res) => {
  res.send(`made a call at ${req.path}`);
});

app.listen(PORT, () =>
  console.log(`Listening to port http://localhost:${PORT}/`)
);
