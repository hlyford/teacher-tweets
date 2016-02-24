var fs = require('fs');
var csv = require('csv');
var csvParse = require('csv-parse');
var tweetGenerator = require('./tweetGenerator').tweetGenerator;

var wordsObject = {};
var rowNamesFromCSV = fs.createReadStream(__dirname + '/tweets.csv');

var parser = csvParse({columns: true}, function(err, data){		  

	// iterates through the rows; 1 is placeholder until ready
  for (var i = 0; i < data.length; i++) {
		var tweetText = '!START! ' + data[i].text;
		var tweetsArray = tweetText.split(' ');
		// iterates through the words in tweet column
		for (var j = 0; j < tweetsArray.length; j++) {
			if (tweetsArray[j] in wordsObject) {
				wordsObject[tweetsArray[j]].count++;				
			} else {
				wordsObject[tweetsArray[j]] = {};
				wordsObject[tweetsArray[j]].count = 1;				
				wordsObject[tweetsArray[j]].nextWords = {};
			}
			if (wordsObject[tweetsArray[j]].nextWords[tweetsArray[j + 1]]) {
				wordsObject[tweetsArray[j]].nextWords[tweetsArray[j + 1]]++;
			} else {
				wordsObject[tweetsArray[j]].nextWords[tweetsArray[j + 1]] = 1;
			}
		}				
	}	
	var newTweet = tweetGenerator(wordsObject);
	console.log(newTweet);
	return newTweet
});
rowNamesFromCSV.pipe(parser);

// SEND OFF RESULT OF PULLING FROM FILE
// var result = function(callback) {
//  callback(rowNamesFromCSV.pipe(parser));
// }
// result(function(tweets) {
// 	module.exports = tweets;
// })



