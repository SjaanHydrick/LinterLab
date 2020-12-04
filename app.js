const express = require('express');
const app = express();
const linter = require('./linter.js')

app.use(express.json());

app.post('/api/lint', (req, res) => {
    const passedData = req.body;
    const verdict = linter(passedData);
    res.status(200).json(verdict)
})

app.listen(3005, () => {
    console.log('HI! 3005')
})