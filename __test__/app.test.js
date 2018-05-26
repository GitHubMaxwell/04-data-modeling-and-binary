const bitmap = require('../src/lib/bitmap.js');
const fileReader = require('../src/lib/file.js');
const fs = require('fs');


describe('APP Module', () => {
  // it('tests to see undefined (hardcoded to bitmap.js) is being returned', (done)=>{
  //   // const expected = `${__dirname}/../../assets/bitmap.bmp`;
  //   fileReader.readFile(`${__dirname}/../../assets/bitmap.bmp`,(err,data)=>{
  //     expect(buffer(data)).toBeNull();
  //     done();
  //   });
  // });

  // it('tests to see if the data from file.js is being passed and parsed in bitmap.js', (done)=>{
  //   // const expected = `${__dirname}/../../assets/bitmap.bmp`;
  //   fileReader.readFile(`${__dirname}/../../assets/bitmap.bmp`,(err,data)=>{

  //     console.log(data);
  //     expect(bitmap(data)).toBe('1');
  //     done();
  //   });
  // });

  it('tests to see if the data from file.js is being passed and parsed in bitmap.js', (done)=>{
    // const expected = `${__dirname}/../../assets/bitmap.bmp`;
    fs.readFile(`${__dirname}/../../assets/bitmap.bmp`,(err,data)=>{
      // if (err) callback(err);
      // return callback(null, data);
      let newData = data;
      console.log(data);
      return newData;
    });
    expect(bitmap(newData)).toBe('1');
    done();
  });
  // });

});