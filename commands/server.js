const server = require('../server')

exports.command = 'server'
exports.describe = 'starts the server'

exports.builder = {
    host: {
    },
    port: {
        default : '1337'
    }
}

exports.handler = function (argv) {
    server().listen(argv.port, argv.host, err => {
        if (err) {
            return console.err(err)
        }

        console.log(`server running at ${argv.host || 'localhost'}:${argv.port}`)
    })
}