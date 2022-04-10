const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Maybe wars aren\'t meant to be won, maybe they\'re meant to be continuous.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
