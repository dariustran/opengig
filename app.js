const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Open Gig');
});

app.listen(5000);