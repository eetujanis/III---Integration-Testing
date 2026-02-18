const express = require('express');
const convertHex = require('./converter');
const app = express();

app.get('/convert', (req, res) => {
  const hex = req.query.hex;
  const rgb = convertHex(hex);
  res.json(rgb);
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}
