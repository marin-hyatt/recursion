export const fibonacci = (n) => {
  if (n <= 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  const prevArr = fibonacci(n - 1);

  return [...prevArr, prevArr.at(-1) + prevArr.at(-2)];
};

// console.log(fibonacci(8));

export const mergeSort = (arr) => {
  if (arr.length === 0) {
    return [];
  }

  if (arr.length === 1) {
    return arr;
  }

  // divide array into two, arrA might be < arrB
  const arrA = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const arrB = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  let res = [];
  let i = 0;
  let j = 0; // b counter

  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] <= arrB[j]) {
      res.push(arrA[i]);
      i += 1;
    } else {
      res.push(arrB[j]);
      j += 1;
    }
  }

  // Add leftover array
  if (i < arrA.length) {
    res.push(...arrA.slice(i));
  }

  if (j < arrB.length) {
    res.push(...arrB.slice(j));
  }

  return res;
};

console.log(mergeSort([]));
console.log(mergeSort([1]));
console.log(mergeSort([1, 2, 4, 8, 2, 1, 6]));
