const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.static('./public'));

app.listen(5500, () => console.log('Client Server is Serving Index.html at http://localhost:5500'));
