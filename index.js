const app = require('express')();
const PORT = 4141;
app.use('/*', (req, res) => {
  res.send(`made a call at ${req.path}`);
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
