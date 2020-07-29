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
