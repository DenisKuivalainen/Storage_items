const express = require('express');
const path = require('path');
const { getApi } = require('./server/Main');

// Port 8080 for Heroku
const port = process.env.PORT || 8080;
 
const app = express();
 
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
 
app.get('/items', function(req, res) {
    return getApi(req.query.category)
    .then(responce => res.send(JSON.stringify(responce)));
});

 
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(port);