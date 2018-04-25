const utils = require('./utils');

class Color {

    constructor(options = {}) {
        try {
            this.validateOptions(options);
        } catch(err) {
            console.error(err.message);
        }
    }

    validateOptions(options) {
        if (typeof options !== 'object') throw Error('Color expects options to be object');
        if (! utils.isTinyInt(options.red)) throw Error('Color expects red to be int between 0-255');
        this.red = options.red;
        if (! utils.isTinyInt(options.green)) throw Error('Color expects green to be int between 0-255');
        this.green = options.green;
        if (! utils.isTinyInt(options.blue)) throw Error('Color expects blue to be int between 0-255');
        this.blue = options.blue;
        if (utils.isTinyInt(options.opacity)) {
            this.opacity = options.opacity;
        } else {
            this.opacity = 255;
        }
    }

}

module.exports = Color;
