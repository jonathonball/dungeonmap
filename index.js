const Image = require('./lib/image');
const Color = require('./lib/color');

var test = new Image({
    width: 120,
    height: 100
});

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

offset = 0;
samples.forEach((sample) => {
    test.rectangle(offset, 0, 10, 100, Color.getPreset(sample));
    offset += 10;
});
test.pack('test.png');
