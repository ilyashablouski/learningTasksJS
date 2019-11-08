/* eslint-disable require-jsdoc */
const array = [1, 2, 5, 6, 8, 4];

// get max value from array using cycle "for" and "if"
function getMaxValue() {
  let maxValue = array[0];

  for (i = 0; i < array.length; i++) {
    if (maxValue < array[i]) {
      maxValue = array[i];
    }
  }

  return maxValue;
}
console.log(getMaxValue());

// get min value from array using method Math.min() and operator ...spread
function getMinValue() {
  const minValue = Math.min(...array);

  return minValue;
}
console.log(getMinValue());

/* ---------------------------------------------------------------------- */
const arrayDifValTypes = [2, -1, 0, false, NaN, undefined, -50, 40, '', true];

// get "false" value from array using method "array.filter(callback(){})"
// and operator "?"
function getFalseValue() {
  const falseArray = arrayDifValTypes.filter((item) => {
    return item == false ? true : false;
  });

  return falseArray;
}
console.log(getFalseValue());

/* ---------------------------------------------------------------------- */
const arrayForClass = [-100, 1, 2, -2, undefined, -200, -1];

// get min value from array using Obj.method() of class and operator "?"
class Array {
  constructor(arrayForClass) {
    this.array = arrayForClass;
  }

  getMinValue() {
    let minValue = this.array[0];
    this.array.forEach((item) => {
      item < minValue ? minValue = item : false;
    });

    return minValue;
  }
}

const arrayObj = new Array(arrayForClass);
console.log(arrayObj.getMinValue());
