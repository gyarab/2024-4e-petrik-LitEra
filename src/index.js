const express = require('express');
const app = express();
const PORT = 3000;

// Nastavení statických souborů (pro frontend)
app.use(express.static('public'));

// Hlavní route
app.get('/', (req, res) => {
  res.send('Vítejte na historické časové ose!');
});

// Spuštění serveru
app.listen(PORT, () => {
  console.log(`Server běží na http://localhost:${PORT}`);
});