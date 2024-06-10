const ClientError = require('./ClientError');

class InputError extends ClientError {
    constructor(message) {
        super(nessage);
        this.name = 'InputError';
        this.statusCode = 422;
    }
}

module.exports = InputError;
