// 1)Print 1 - 255
// Print1To255()
// Print all the integers from 1 to 255.

function Print1to255() {
  for (var i = 1; i <= 255; i++) {
    console.log(i);
  }
}
Print1to255();

// 2. Print Odds 1 - 255
// PrintOdds1To255()
// Print all odd integers from 1 to 255.

function PrintOdds1To255() {
  for (var i = 1; i <= 255; i += 2) {
    console.log(i);
  }
}
PrintOdds1To255();

// 3. Print Ints and Sum 0 - 255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer
// print the sum so far.

function PrintIntsAndSum0To255() {
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    sum = sum + i;
    console.log("i=" + i + " Sum=" + sum);
  }
}

PrintIntsAndSum0To255();

// 4. Iterate and Print Array
// Iterate through a given array, printing each value.
//   PrintArrayVals(arr)

function PrintArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

PrintArrayVals([2, 3, 4, 51, 2]);

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element

function PrintMaxOfArray(arr) {
  //assumption: list is not empty
  var largest = arr[0]; //2=>45=>50
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      //i=0>
      largest = arr[i];
    }
  }
  console.log(largest);
}
PrintMaxOfArray([2, 45, 6, 2, 3, 50]);

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.

function PrintAverageOfArray(arr) {
  var sum = 0;
  var avg = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  avg = sum / arr.length;
  console.log(avg);
}

PrintAverageOfArray([3, 67, 5, 8, 1]);

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1
// and 255(inclusive).

function ReturnOddsArray1To255() {
  arr = [];
  for (var i = 1; i < 256; i += 2) {
    arr.push(i);
    // console.log(arr);
  }
  return arr;
}

ReturnOddsArray1To255();

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that
// same array with changed values.

function SquareArrayVals(arr) {
  var square = 0;
  for (var i = 0; i < arr.length; i++) {
    square = arr[i] * arr[i];
    console.log(square);
    arr[i] = square;
  }
  return arr;
}

console.log(SquareArrayVals([1, 3, 4, 6, 342]));

// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.

function ReturnArrayCountGreaterThanY(arr, y) {
  var count = 0;
  var larger = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count = count + 1;
    }
  }
  return count;
}
console.log(ReturnArrayCountGreaterThanY([2, 3, 1, 5, 6], 3));
