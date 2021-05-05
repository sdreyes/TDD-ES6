import { getLetterCount } from './letter-count.js';

export const isAnagram = (stringOne, stringTwo) => {
  // If either string is null or empty, return false
  if (!stringOne || !stringTwo) return false;

  // If the strings aren't the same length after stripping spaces and special characters, return false
  stringOne = stringOne.toLowerCase().replace(/[^0-9a-z]/gi, '');
  stringTwo = stringTwo.toLowerCase().replace(/[^0-9a-z]/gi, '');
  if (stringOne.length !== stringTwo.length) return false;

  // For each letter in stringTwo, if the letter exists in the stringOne count, decrement it
  // Otherwise, return false
  const stringOneLetters = getLetterCount(stringOne);
  for (const letter of stringTwo) {
    if (stringOneLetters[letter]) {
      stringOneLetters[letter]--;
    } else {
      return false;
    }
  }

  // For each key in stringOne, if any count remains, return false
  for (const letter in stringOneLetters) {
    if (stringOneLetters[letter]) return false;
  }
  return true;
}