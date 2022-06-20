function isPalindrome(word) {
  // Write your algorithm here

  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;

    if(word[i] !== word[j]) return false
    
  }
  return true
}

/* 
  Add your pseudocode here
  if the the first letter is the same as the last letter to the word
  if the second letter is the same as the second to last letter, and so on (until the middle of the word), 
  the function should return true

    iterate from beginning to middle
  check each letter against corresponding one from end
      if no match return false
  return true

 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;