// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arr) {
  if (!arr.length) return null;

  index = 0;
  longest = 0;
  arr.forEach((element, i) => {
    if (element.length > longest) {
      index = i;
      longest = element.length;
    }
  });
  return arr[index];
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  sum = 0;
  arr.forEach((e) => (sum += e));
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (!arr.length) return 0;
  sum = sumNumbers(arr);
  return sum / arr.length;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arr, word) {
  console.log(word, arr);
  if (!arr.length) return null;
//   arr.forEach((e) => {
//     console.log("Check: ", e, word, e === word);
//     if (e === word) {
//       console.log("TRUE");
//       return true;
//     }
//   });
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === word) return true;
    }
    return false;
  
}
