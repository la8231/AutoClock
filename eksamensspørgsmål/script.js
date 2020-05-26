let arr1 = [1, 43, 22];
let arr2 = [2, 13, 9];
let integer = 8;

function closestint(int, arrA, arrB) {
  let closeint = [];
  for (i = 0; i < arrA.length; i++) {
    for (j = 0; j < arrB.length; j++) {
      if (arrA[i] + arrB[j] == int) {
        closeint.push([arrA[i], arrB[j]]);
          console.log(closeint);
      }
    }
  }
  if (closeint.length == 0 && 0 < int) {
    closestint(int - 1, arr1, arr2);
  }
  int
  
}

closestint(integer, arr1, arr2)