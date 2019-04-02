exports.command = 'cli [url]'
exports.describe = 'connects with the server'

exports.builder = {
    banana: {
        default : 'cool'
    }
}

exports.handler = function (argv) {
    console.log('cli', argv, arguments)
}