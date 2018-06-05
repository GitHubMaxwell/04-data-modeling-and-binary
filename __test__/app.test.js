const bitmap = require('../src/lib/bitmap.js');
const fileReader = require('../src/lib/file.js');
const transformFile = require('../src/lib/transform.js');
// const fs = require('fs');


describe('APP Module', () => {
  // it('tests to see undefined (hardcoded to bitmap.js) is being returned', (done)=>{
  //   // const expected = `${__dirname}/../../assets/bitmap.bmp`;
  //   fileReader.readFile(`${__dirname}/../../assets/bitmap.bmp`,(err,data)=>{
  //     expect(buffer(data)).toBeNull();
  //     done();
  //   });
  // });

  it('tests to see undefined with non existent file', (done)=>{
    const expected = undefined;
    fileReader.readFile(`${__dirname}/../../assets/missing.bmp`,(err) =>{
      expect(expected).toBeUndefined();
      done();
    });
  });

  // it('tests to see undefined with non existent file as second file', (done)=>{
  //   const expected = undefined;
  //   fileReader.readFile(`${__dirname}/../../assets/bitmap.bmp`,(err) =>{
  //     expect(expected).toBeUndefined();
  //     done();
  //   });
  // });

  it('tests to see if the data from file.js is being passed and parsed in bitmap.js', (done)=>{
    // const expected = `${__dirname}/../../assets/bitmap.bmp`;
    fileReader.readFile(`${__dirname}/../assets/bitmap.bmp`,(err,data)=>{
      // console.log(`${__dirname}/../assets/bitmap.bmp`);
      // console.log(data);
      // expect(bitmap(data).toString('utf-8', 0, 2)).toBe('BM');
      // console.log((bitmap(data)).type);
      expect((bitmap(data)).type).toBe('BM');
      done();
    });
  });

  // it('tests to see if the data from file.js is being passed and parsed in bitmap.js', (done)=>{
  //   // const expected = `${__dirname}/../../assets/bitmap.bmp`;
  //   fs.readFile(`${__dirname}/../../assets/bitmap.bmp`,(err,data)=>{
  //     // if (err) callback(err);
  //     // return callback(null, data);
  //     // let newData = data;
  //     console.log(data);
  //     expect(bitmap.parsedBitmap.type).toBe('1');
  //     done();
  //     // return newData;
  //   });
  // });
  // });

  it('tests to read file, transform file, save newfile', (done)=>{
    fileReader.readFile(`${__dirname}/../assets/bitmap.bmp`,(err,data)=>{

      // let newFile = Buffer.from(data);
      let newFile = bitmap(data);
      //create a copy of the object to manipulate

      let runTransform = transformFile.invert(newFile);
      console.log(runTransform);

      //     transformFile.invert(newFile => {
      let newBuffer = Buffer.concat([runTransform.bmpHeader, runTransform.dibHeader, runTransform.colorPalette, runTransform.pixelArray], runTransform.fileSize);

      fileReader.writeFile(`${__dirname}/../assets/new.bmp`, newBuffer, (err)=>{
        //does it have to be newFile.buffer?
        if (err){
          throw err;
        }
      });
      //       // expect((bitmap(data)).type).toBe('BM');
      done();
      //     });
    });//it
  
  });
});