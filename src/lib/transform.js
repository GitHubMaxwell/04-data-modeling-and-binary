

// (buffer, transformation, cb) => {
//   transformations[transformation] && transformations[transformation](buffer);
//   return cb(null, buffer);
//no error back?
// };

let transformations = {};

transformations.invert = buffer => {
  for(let i = 0; i <= (buffer.colorTable.length - 4); i = i + 4) {
    buffer.colorTable[i] = 255 - buffer.colorTable[i];
    buffer.colorTable[i + 1] = 255 - buffer.colorTable[i + 1];
    buffer.colorTable[i + 2] = 255 - buffer.colorTable[i + 2];
  }
  // console.log(buffer);
  return buffer;
};

transformations.random = buffer => {
  let getRandomArbitrary = (min, max) => {
    return Math.random() * (min - max) + min;
  };

  for(let i = 0; i <= (buffer.colorTable.length - 4); i = i + 4) {
    buffer.colorTable[i] = getRandomArbitrary(0, 255);
    buffer.colorTable[i + 1] = getRandomArbitrary(0, 255);
    buffer.colorTable[i + 2] = getRandomArbitrary(0, 255);
  }
};

transformations.frame = buffer => {
  let color = '#7878f0';

  for(let i = 0; i < 100; i++) {
    buffer.pixelArray[i] = color;
    buffer.pixelArray[100 + i] = color;
    buffer.pixelArray[200 + i] = color;
    buffer.pixelArray[9700 + i] = color;
    buffer.pixelArray[9800 + i] = color;
    buffer.pixelArray[9900 + i] = color;
  }
  
  for(let i = 3; i <= 97; i++) {
    buffer.pixelArray[i * 100] = color;
    buffer.pixelArray[i * 100 + 1] = color;
    buffer.pixelArray[i * 100 + 2] = color;
    buffer.pixelArray[i * 100 + 97] = color;
    buffer.pixelArray[i * 100 + 98] = color;
    buffer.pixelArray[i * 100 + 99] = color;
    
  }
};

module.exports = transformations;