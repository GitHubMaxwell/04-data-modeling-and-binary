'use strict';

const fileUtils = require('./src/lib/file.js');
const bitmap = require('./src/lib/bitmap.js');
const transformFile = require('./src/lib/transform.js');

// const transformations = ['invert', 'rotate', 'randomize', 'frame'];
// const cliArgs = process.argv;

// let originalFile = process.argv[2] || 'bitmap.bmp';
// let newFile = process.argv[3] || 'new.bmp';
// let transformation = process.argv[4] || 'ivert';

// fileUtils.readFile(`${__dirname}/assets/${originalFile}`, function(err, buffer) {
//   if(err) { throw err; }
//   let bitmap = bitmapParser(buffer);
// });

// transformFile(bitmap, transformation, (err, buffer) => {
  
//   let newBuffer = Buffer.concat([bitmap.bmpHeader, bitmap.dibHeader, bitmap.colorPalette, bitmap.pixelArray], bitmap.length);

//   fileUtils.writeFile(`${__dirname}/assets/${newFile}`, newBuffer, 
  
//     function(err, data) {
//       if(err) { throw err; }
//       else {
//         console.log('success');
//       }
//     });
// });

fileUtils.readFile(`${__dirname}/../assets/bitmap.bmp`,(err,data)=>{

  // let newFile = Buffer.from(data);
  let newFile = bitmap(data);
  //create a copy of the object to manipulate

  let runTransform = transformFile.transformations.invert(newFile);

  fileUtils.writeFile(`${__dirname}/../assets/new.bmp`, runTransform, (err)=>{
    //does it have to be newFile.buffer?
    if (err){throw err;}
    else{
      let newBuffer = Buffer.concat([bitmap.bmpHeader, bitmap.dibHeader, bitmap.colorPalette, bitmap.pixelArray], bitmap.length);
      return newBuffer;
    }

  });
});