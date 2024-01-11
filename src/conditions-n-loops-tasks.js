/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max;
  if (a > b && a > c) {
    max = a;
  } else if (b > a && b > c) {
    max = b;
  } else {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a && (a === b || b === c || a === c)) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romeNumArr = [
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  function convertRoman(number) {
    if (num === 0) {
      return '';
    }
    for (let i = 0; i < romeNumArr.length; i += 1) {
      if (number >= romeNumArr[i][0]) {
        return romeNumArr[i][1] + convertRoman(number - romeNumArr[i][0]);
      }
    }
    return '';
  }
  return convertRoman(num);
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let newStr = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i !== 0) {
      newStr += ' ';
    }
    switch (numberStr[i]) {
      case '-':
        newStr += 'minus';
        break;
      case '0':
        newStr += 'zero';
        break;
      case '1':
        newStr += 'one';
        break;
      case '2':
        newStr += 'two';
        break;
      case '3':
        newStr += 'three';
        break;
      case '4':
        newStr += 'four';
        break;
      case '5':
        newStr += 'five';
        break;
      case '6':
        newStr += 'six';
        break;
      case '7':
        newStr += 'seven';
        break;
      case '8':
        newStr += 'eight';
        break;
      case '9':
        newStr += 'nine';
        break;
      case ',':
        newStr += 'point';
        break;
      case '.':
        newStr += 'point';
        break;
      default:
        break;
    }
  }
  return newStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let newNum = num;
  while (newNum > 0) {
    if (newNum % 10 === digit) {
      return true;
    }
    newNum = Math.floor(newNum / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) {
    return -1;
  }
  let leftCounter = 0;
  let rightCounter = 0;
  let index = -1;
  for (let i = 0; i < arr.length; i += 1) {
    rightCounter = 0;
    leftCounter += arr[i];
    index = i + 1;
    for (let x = i + 2; x < arr.length; x += 1) {
      rightCounter += arr[x];
    }
    if (leftCounter === rightCounter) {
      return index;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let left = 0;
  let right = size - 1;
  let top = 0;
  let bottom = size - 1;

  const arr = [];
  let number = 1;

  const fullSize = size * size;

  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
  }

  while (number <= fullSize) {
    for (let i = left; i <= right && number <= fullSize; i += 1) {
      arr[top][i] = number;
      number += 1;
    }
    top += 1;
    for (let i = top; i <= bottom && number <= fullSize; i += 1) {
      arr[i][right] = number;
      number += 1;
    }
    right -= 1;
    for (let i = right; i >= left && number <= fullSize; i -= 1) {
      arr[bottom][i] = number;
      number += 1;
    }
    bottom -= 1;
    for (let i = bottom; i >= top && number <= fullSize; i -= 1) {
      arr[i][left] = number;
      number += 1;
    }
    left += 1;
  }

  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const { length } = matrix;
  const arr = matrix;
  for (let i = 0; i < Math.floor(length / 2); i += 1) {
    for (let x = 0; x < length - 2 * i - 1; x += 1) {
      const temp = matrix[i][i + x];
      arr[i][i + x] = matrix[length - 1 - i - x][i];
      arr[length - 1 - i - x][i] = matrix[length - 1 - i][length - 1 - i - x];
      arr[length - 1 - i][length - 1 - i - x] = matrix[i + x][length - 1 - i];
      arr[i + x][length - 1 - i] = temp;
    }
  }
  return arr;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function quickSort(array) {
    if (array.length <= 1) {
      return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i += 1) {
      if (array[i] <= pivot) {
        left[left.length] = array[i];
      } else {
        right[right.length] = array[i];
      }
    }

    return [...sortByAsc(left), pivot, ...sortByAsc(right)];
  }

  const sortedArr = quickSort(arr);
  const nonSorted = arr;

  for (let i = 0; i < arr.length; i += 1) {
    nonSorted[i] = sortedArr[i];
  }

  return nonSorted;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let leftStr = '';
  let rightStr = '';
  let fullStr = str;
  let iterationToStartingStr = 0;

  for (let i = 0; i < iterations; i += 1) {
    leftStr = '';
    rightStr = '';
    for (let x = 0; x < str.length; x += 1) {
      if (x % 2 === 0) {
        leftStr += fullStr[x];
      } else {
        rightStr += fullStr[x];
      }
    }
    fullStr = leftStr + rightStr;
    if (str === fullStr) {
      iterationToStartingStr = iterations % (i + 1);
      if (i === iterations - 1) {
        return fullStr;
      }
      break;
    }
  }

  for (let i = 0; i < iterationToStartingStr; i += 1) {
    leftStr = '';
    rightStr = '';
    for (let x = 0; x < str.length; x += 1) {
      if (x % 2 === 0) {
        leftStr += fullStr[x];
      } else {
        rightStr += fullStr[x];
      }
    }
    fullStr = leftStr + rightStr;
  }
  return fullStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = Array.from(String(number), Number);
  let swapIndex = 0;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] > arr[i - 1]) {
      swapIndex = i - 1;
      break;
    }
  }

  let smallestNumIndexToSwap = swapIndex + 1;
  if (swapIndex === 0 || swapIndex) {
    for (let i = swapIndex + 1; i < arr.length; i += 1) {
      if (arr[i] < arr[smallestNumIndexToSwap] && arr[i] > arr[swapIndex]) {
        smallestNumIndexToSwap = i;
      }
    }
  }

  const newNumArr = [];
  const leftPartArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i === swapIndex) {
      newNumArr.push(arr[smallestNumIndexToSwap]);
    } else if (i === smallestNumIndexToSwap) {
      leftPartArr.push(arr[swapIndex]);
    } else if (i > swapIndex) {
      leftPartArr.push(arr[i]);
    } else {
      newNumArr.push(arr[i]);
    }
  }

  leftPartArr.sort();
  const finalArr = [...newNumArr, ...leftPartArr];
  return parseInt(finalArr.join(''), 10);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
