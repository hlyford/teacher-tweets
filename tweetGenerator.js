var tweetGenerator = function(graph) {

	var finalSentence = '';	
	var addWord = function(currentWord, sentenceSoFar) {				
		// base case: hit "undefined", end of a tweet
		if (currentWord === '!undefined!') {			
			// slice off "!START! " and return the remaining string
			return sentenceSoFar.slice(8, sentenceSoFar.length - 1);
		} else {
			// recursive case
			sentenceSoFar += currentWord + ' ';			
			var totalFrequencyNextWords = 0;					
			var nextWordFrequencies = [];

			// loop through each key in nextWords and grow denominator, and numerators for each word
			for (var key in graph[currentWord].nextWords) {
				totalFrequencyNextWords += graph[currentWord].nextWords[key];				
				
				// make an array with each word appearing in it equal to its frequency as next word
				var count = 0;
				while (count < graph[currentWord].nextWords[key]) {
					nextWordFrequencies.push(key);
					count++;
				}
			}
			// select a random word in the nextWordFrequencies array
			var randomSelect = Math.floor(Math.random() * totalFrequencyNextWords) + 0;			
			var selectedWord = nextWordFrequencies[randomSelect];			
			// recursively call with the next word
			return addWord(selectedWord, sentenceSoFar);
		}		
	}
	return addWord('!START!', '');
}

module.exports = {
	tweetGenerator: tweetGenerator
}