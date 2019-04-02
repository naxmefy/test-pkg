const path = require('path')

module.exports = function (app, express) {
    app.use('/client', express.static(__dirname + '/build'))
    app.get('/client*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    })
}