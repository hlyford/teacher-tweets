var fs = require('fs');
var csv = require('csv');
var csvParse = require('csv-parse');

// console.log(__dirname+'/tweets.csv');
var wordsObject = {};
var rowNamesFromCSV = fs.createReadStream(__dirname + '/tweets.csv');
parser = csvParse({columns: true}, function(err, data){		
  // console.log(data);

  for (var i = 0; i < 2; i++) {
		var tweetText = data[i].text;
		var tweetsArray = tweetText.split(' ');

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
})

rowNamesFromCSV.pipe(parser);

// paragraph about how you might test the functionality 
// put into .zip
