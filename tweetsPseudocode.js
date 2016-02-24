// create wordObject

// bring in the input from the file sample file
	// use FS.read 
	// create a variable 'contents' to point to the contents of the file
	// HAVE: variable with the contents, each line seperated by some marker

// iterate through each row of the contents
	// iterate through each word in the 'text' column of the contents variable (as marked by space character)
	// e.g. "Learn how to connect general ed Ss w/ #sped Ss during #HourOfCode! Share your coding resource w/ #codewithTES!  https://t.co/NGxHqxlBX6"
		// create an empty as the fix word
		// if the word is not in the wordsObject, then i want to make a new index at that word and set value = 1
		// else if the word is in the wordsObject, increment the value at the word index  

		// ** if the word is at the beginning of at tweet,  

// HAVE: wordsObject containing each word (key) and object containing sets of next possible words and frequencies (value)

// { 
//	  "The" : 
//    {
// 	  	count: 2,
// 	    nextWords: 
//      {
// 		    "cat" : 2,
// 		    "cow" : 5
// 	    }
// 	  }
// }

// construct a function that uses the graph to return a tweet
	// base case: if null is selected as the next word
		// return the string so far
	// 	
	// select the next item based on the frequency (number of times that word appeared) / (# times words appeared + # times all other words appeared)
	// assign a *range* to each word ; select a random number within the rnage ddefined by the total # times words appeared


// ** NOTES **
// sentence returned by function must begin with one of the words that began a tweet
// the end if self-governing as we're storing null and its frequency for each word