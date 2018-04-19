'use strict';

const reader = require('./lib/reader.js');

const story1Path = `${__dirname}/data/story1.txt`;
const story2Path = `${__dirname}/data/story2.txt`;
const story3Path = `${__dirname}/data/story3.txt`;

const printStories = (stories) => {
  console.log(stories);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
};

const storyData = [story1Path, story2Path, story3Path];

const readStoryDataAsync = (storyArray, currentValue, callback) => {
  if (currentValue >= storyArray.length) {
    return callback();
  }
  const currentValuePath = storyArray[currentValue];
  try {
    return reader.readCharsOfStoryAsync(currentValuePath, (error, story) => {
      printStories(story);
      readStoryDataAsync(storyData, currentValue + 1, callback);
    });
  } catch (error) {
    callback(error);
  }
  return undefined;
};

readStoryDataAsync(storyData, 0, () => console.log('Completed file reading processes.'));
