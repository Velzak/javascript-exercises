const reverseString = function(word) {
    let wordArray = word.split('');
    let arrayWord = wordArray.reverse();
	let words = arrayWord.join('');
  
    return(words);
}

module.exports = reverseString
