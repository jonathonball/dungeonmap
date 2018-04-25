const Image = require('./lib/image');
const Color = require('./lib/color');

var samples = [
    'red',
    'orange',
    'yellow',
    'chartreuse',
    'green',
    'spring',
    'cyan',
    'azure',
    'blue',
    'violet',
    'magenta',
    'rose'
];

var test = new Image({
    width: samples.length * 10,
    height: 100
});


var offset = 0;
samples.forEach((sample) => {
    test.rectangle(offset, 0, 10, 100, Color.getPreset(sample));
    offset += 10;
});

test.pack('test.png');
