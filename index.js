const Image = require('./lib/image');
const Color = require('./lib/color');

var test = new Image({
    width: 100,
    height: 100
});

test.fill(Color.getPreset('orange'));
test.rectangle(10,10, 80, 80, Color.getPreset('blue'));
test.setPixel(50, 50, Color.getPreset('red'));
test.pack('test.png');
