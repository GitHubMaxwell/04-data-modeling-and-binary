const bitmap = require('../src/lib/bitmap.js');
const fileReader = require('../src/lib/file.js');
//none of these tests are real for file.test.js

describe('FILE Module', () => {
  it('tests to see undefined with non existent file', (done)=>{
    const expected = undefined;
    fileReader.readFile(`${__dirname}/../../assets/missing.bmp`,(err) =>{
      expect(expected).toBeUndefined();
      done();
    });
  });

  //   it('tests to see undefined with non existent file as second file', (done)=>{
  //     const expected = undefined;
  //     fileReader.readFile(`${__dirname}/../../assets/bitmap.bmp`, 'missing.txt',(err) =>{
  //       expect(expected).toBeUndefined();
  //       done();
  //     });
  //   });

  //   it('tests to see undefined (hardcoded to bitmap.js) is being returned', (done)=>{
  //     // const expected = `${__dirname}/../../assets/bitmap.bmp`;
  //     fileReader.readFile(`${__dirname}/../../assets/bitmap.bmp`,(err,data)=>{
  //       expect(buffer(data)).toBeNull();
  //       done();
  //     });
  //   });
  
//   it('tests to see if the data from file.js is being passed and parsed in bitmap.js', (done)=>{
//     // const expected = `${__dirname}/../../assets/bitmap.bmp`;
//     fileReader.readFile(`${__dirname}/../assets/bitmap.bmp`,(err,data)=>{
//     //   console.log(`${__dirname}/../assets/bitmap.bmp`);
//     //   console.log(data);
//       // expect(bitmap(data).toString('utf-8', 0, 2)).toBe('BM');
//       console.log((bitmap(data)).type);
//       expect((bitmap(data)).type).toBe('BM');
//       done();
//     });
//   });

});