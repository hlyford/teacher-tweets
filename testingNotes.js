// paragraph about how you might test the functionality 

/* 

PART I: pull the tweets from the CSV

	- test A: Expect the number of times a word appears total ("count" in my data structure) to equal 
	the number of times it appears as in nextWords objects for all other words

PART II: generate a tweet based on the frequencies of words appearing

	- test A: Expect the word at index 'i' in the generated tweet to be a key in the 'nextWords' object for the word 
	at 'i - 1' in the 'wordsObject' graph I created

	Other: Because of the nature of generating random numbers to select the words, I may need to 
	deviate from normal "expect" unit tests. Some ideas for how I might test...

		- Test the pseudorandom nature of my number select. I know that computer randomized items are not 
		truly random so I'd want to test how close it comes to pure randomness.
		- Measure the average length of tweets in the csv. Run my tweet generator many times to get a large sample.
		Examine how much the mean length of the sample tweets deviates from the mean length in the csv (would 
		need to define specific significance parameters). 
		- Generally, examine whether - in a large sample size - words that appeared more often after certain words showed up more commonly 
		after those words in the sample. Again, I would need to define significance and proxies so it would be more than an "eyeball test".

*/