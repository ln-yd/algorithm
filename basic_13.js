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
