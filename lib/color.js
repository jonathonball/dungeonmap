const utils = require('./utils');

const Presets = {
    red: {
        red: 255,
        green: 0,
        blue: 0
    },
    orange: {
        red: 255,
        green: 127,
        blue: 0
    },
    yellow: {
        red: 255,
        green: 255,
        blue: 0
    },
    chartreuse: {
        red: 215,
        green: 255,
        blue: 0
    },
    green: {
        red: 0,
        green: 255,
        blue: 0
    },
    spring: {
        red: 0,
        green: 255,
        blue: 127
    },
    cyan: {
        red: 0,
        green: 255,
        blue: 255
    },
    azure: {
        red: 0,
        green: 127,
        blue: 255
    },
    blue: {
        red: 0,
        green: 0,
        blue: 255
    },
    violet: {
        red: 127,
        green: 0,
        blue: 255
    },
    magenta: {
        red: 255,
        green: 0,
        blue: 255
    },
    rose: {
        red: 255,
        green: 0,
        blue: 127
    }
};

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

    static getPreset(name) {
        if (Presets[name]) {
            return new Color(Presets[name]);
        } else {
            return null;
        }
    }

}



module.exports = Color;
