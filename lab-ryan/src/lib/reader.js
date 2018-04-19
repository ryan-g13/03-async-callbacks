'use strict'; 

const fs = require('fs');

const reader = module.exports = {};

reader.readCharsOfStoryAsync = (filePath, callback) => fs.readFile(
  filePath, 
  (error, result) => {
    if (error) {
      throw error;
    }
    return callback(null, result.toString('utf8', 0));
  },
);
