const Image = require('./lib/image');
const Color = require('./lib/color');

var test = new Image({
    width: 100,
    height: 100
});

var orange = new Color({
    red: 255,
    green: 165,
    blue: 0
});

var blue = new Color({
    red: 0,
    green: 0,
    blue: 255
});

var red = new Color({
    red: 255,
    green: 0,
    blue: 0
});

test.fill(orange);
test.rectangle(10,10, 80, 80, blue);
test.setPixel(50, 50, red);
test.pack('test.png');
