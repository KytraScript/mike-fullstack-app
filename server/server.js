const express = require('express');
const app = express();
const dummyQuestions = require('../questions-dummy-data.js');
const cors = require('cors');

app.use(cors());

app.get('/dummyQuestions', (req, res) => {
    res.send(dummyQuestions);
});

app.listen(8000, () => console.log('API server listening on port 8000!'));

