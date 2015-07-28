const util = require('util');
const convict = require('convict');
const winston = require('winston');

winston.level = 'debug';

const config = module.exports = convict({
    appname: 'express-react-rethink-es6',
    env: {
        doc: 'The application environment.',
        format: ['production', 'development'],
        default: 'development',
        env: 'NODE_ENV'
    },
    port: {
        doc: 'The server port to bind.',
        format: 'port',
        default: 3000,
        env: 'PORT'
    },
    rethinkUrl: {
        doc: 'RethinkDB URL',
        format: 'url',
        default: 'localhost',
        env: 'REHINK_URL'
    },
    rethinkPort: {
        doc: 'RethinkDB client port',
        format: 'port',
        default: 28015,
        env: 'RETHINK_PORT'
    }
});

config.validate();

winston.debug(config.get('appname') + ':configuration', util.inspect(process.env, {
    colors: true
}));