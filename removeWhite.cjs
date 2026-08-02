const Jimp = require('jimp');

Jimp.read('public/img/logo.png')
  .then(image => {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red   = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue  = this.bitmap.data[idx + 2];
      
      // If it's near white (e.g. > 240)
      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0; // set alpha to 0
      }
    });
    return image.writeAsync('public/img/logo.png');
  })
  .then(() => {
    console.log("Background removed successfully!");
  })
  .catch(err => {
    console.error(err);
  });
