function isPalindrome(word) {
  // Write your algorithm here
  const length = word.length;
  for (let i = 0; i < length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
      return false; // If characters don't match, it's not a palindrome
    }
  }
  return true; // If all characters match, it is a palindrome
  
}

/* 
  Add your pseudocode here
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

isPalindrome("racecar"); // true
isPalindrome("robot"); // false
isPalindrome("abba"); // true
isPalindrome("a"); // false
isPalindrome("ab"); // false
