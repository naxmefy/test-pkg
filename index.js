require('yargs')
    .version()
    .command(require('./commands/cli'))
    .command(require('./commands/server'))
    .argv