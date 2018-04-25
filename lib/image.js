const fs = require('fs');
const PNG = require('node-png').PNG;
const utils = require('./utils');
const Color = require('./color');

class Image {

    constructor(options = {}) {
        if (! utils.isTinyInt(options.width)) throw Error('Expected width between 0-255');
        if (! utils.isTinyInt(options.height)) throw Error('Expected height between 0-255');

        this.image = new PNG({
            width: options.width,
            height: options.height
        });
    }

    _getPixelAddress(x, y) {
        return (this.image.width * y + x) << 2;
    }

    setPixel(x, y, color) {
        let address = this._getPixelAddress(x, y);
        this.image.data[address] = color.red;
        this.image.data[address+1] = color.green;
        this.image.data[address+2] = color.blue;
        this.image.data[address+3] = color.opacity;
    }
    
    getPixel(x, y) {
        let address = this._getPixelAddress(x, y);
        return new Color({
            red: this.image.data[address],
            green: this.image.data[address+1],
            blue: this.image.data[address+2],
            opacity: this.image.data[address+3]            
        });
    }

    pack(filename) {
        this.image.pack().pipe(fs.createWriteStream(filename));
    }

    fill(color) {
        for (let y = 0; y < this.image.height; y++) {
            for(let x = 0; x < this.image.width; x++) {
                this.setPixel(x, y, color);
            }
        }
    }

    rectangle(x, y, width, height, color) {
        let yStop = y + height;
        let xStop = x + width;
        for (let j = y; j < yStop; j++) {
            for (let i = x; i < xStop; i++) {
                this.setPixel(i, j, color);
            }
        }
    }

}

module.exports = Image;
