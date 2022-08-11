const express = require('express');
const app = express();
const path = require('path')

const port = process.env.PORT;
//app.use(express.static(`${__dirname}/public`));

if (process.env.NODE_ENV == "production") {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    })
}

app.listen(port);

module.exports = app;