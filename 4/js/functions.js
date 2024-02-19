function stringLenght (line, value) {
  const comparison = line.length <= value;
  return comparison;
}

function palindrome(str) {
  str = str.replaceAll(' ', '');
  str = str.toLowerCase();
  const splitString = str.split('');
  const reverseString = splitString.reverse();
  const joinString = reverseString.join('');
  const checkup = str === joinString;
  return checkup;
}
