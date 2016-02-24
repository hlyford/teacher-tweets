var fs = require('fs');
var csv = require('csv');
var csvParse = require('csv-parse');
var tweetGenerator = require('./tweetGenerator').tweetGenerator;

var wordsObject = {};
var rowNamesFromCSV = fs.createReadStream(__dirname + '/tweets.csv');

var parser = csvParse({columns: true}, function(err, data){		  

	// iterates through the rows; 1 is placeholder until ready
  for (var i = 0; i < 100; i++) {  	
  	// add marker to denote beginning
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
			// clearly mark undefined in the event a teacher included "undefined" in tweet				
			var nextWordInTweet = tweetsArray[j + 1];
			nextWordInTweet = convertUndefined(nextWordInTweet);
			// see if the word is already in nextWords
			if ((tweetsArray[j + 1] in wordsObject[tweetsArray[j]].nextWords)) {				
				wordsObject[tweetsArray[j]].nextWords[nextWordInTweet]++;							
			} else {
				wordsObject[tweetsArray[j]].nextWords[nextWordInTweet] = 1;				
			}
		}				
	}	
		
	var newTweet = tweetGenerator(wordsObject);
	console.log(newTweet);
	return newTweet
});

rowNamesFromCSV.pipe(parser);

function convertUndefined(word) {
	if (word === undefined) {	return '!undefined!'; } 
	else { return word; }
};


// SEND OFF RESULT OF PULLING FROM FILE
// var result = function(callback) {
//  callback(rowNamesFromCSV.pipe(parser));
// }
// result(function(tweets) {
// 	module.exports = tweets;
// })



