const request = require('request');
const fs = require("fs");

const url = 'placeholder'; // access terminal input via process.argv

// boilerplate from https://www.npmjs.com/package/request:
request(url, function(error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the given URL.

  // boilerplate from https://nodejs.dev/en/learn/writing-files-with-nodejs/:
  fs.writeFile('/Users/joe/test.txt', content, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });

});