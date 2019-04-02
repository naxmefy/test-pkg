const path = require('path')
const express = require('express')

const app = express()

module.exports = function() {
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'pug')

    app.use(express.static(__dirname + '/views'))
    app.get('/', function (req, res) {
        res.render('index', { title: 'Hey | PUG PAGE', message: 'Hello there!'})
    })

    require('../client/server-relative')(app, express)

    return app;
}