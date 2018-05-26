'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readFile = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if (err) return callback(err);
    // return callback(null, data);
    let newData = data;
    return newData;
  });
};

exports.writeFile = (fileName, newBuffer, callback) => {
  fs.writeFile(fileName, newBuffer, (err, data) => {
    if (err) return callback(err);
    console.log(data);
    return callback(null, data);

  });
};


// fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, (err, data) => {
//   if (err) return callback(err);
//   console.log(data);
//   let newData = data;

//   // return callback(null, data);
//   console.log(newData);
//   return newData;

// });