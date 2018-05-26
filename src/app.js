'use strict';
const fileUtils = require('./lib/file.js');
//writes and read the file
const bitmapParser = require('./lib/bitmap.js');
//module that parses the bitmap
const transformFile = require('./lib/transform.js');
//file with all the transform algorithms in


//read it, transform it, save it/ this is the flow of this app.js file
const transformations = ['invert','rotate','randomize','frame'];
const cliArgs = process.argv;

let originalFile = process.argv[2] || 'bitmap.bmp';
let newFile = process.argv[3] || 'new.bmp';
let transformation = process.argv[4] || 'invert';

fileUtils.readFile(`${__dirname}/assets/${originalFile}`, function(err,buffer){
  if(err) {throw err;}
  //right off the bat, if this readFile of the argv orginal file somehow returns and err, throw it

  let bitmap = bitmapParser(buffer);

  transformFile(bitmap, transformation, (err,buffer)=>{

    let newBuffer = Buffer.concat([bitmap.bmpHeader, bitmap.dibHeader, bitmap.colorPalette, bitmap.pixelArray], bitmap.length);
    
    fileUtils.writeFile(`${__dirname}/assets/${newFile}`, newBuffer, function(err, data){

      if(err) {
        throw err;
      } else {
        console.log('Created ', `${newFile}`);
      }
    });
  });
});