export function generatePassword(
  useLower,
  useUpper,
  useNumbers,
  useSymbols,
  length
) {
  if (
    [useLower, useUpper, useNumbers, useSymbols].every((item) => item === false)
  ) {
    return "";
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    password += getRandomItem(useLower, useUpper, useNumbers, useSymbols);
  }

  return password;
}

function getRandomItem(useLower, useUpper, useNumbers, useSymbols) {
  let allItems = [];
  if (useLower) allItems = [...allItems, ...lowerLetters];
  if (useUpper) allItems = [...allItems, ...upperLetters];
  if (useNumbers) allItems = [...allItems, ...allNumbers];
  if (useSymbols) allItems = [...allItems, ...allSymbols];
  const index = Math.floor(Math.random() * allItems.length);
  return allItems[index];
}

const lowerLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperLetters = lowerLetters.map((letter) => letter.toUpperCase());
const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const allSymbols = ["!", "#", "$"];
