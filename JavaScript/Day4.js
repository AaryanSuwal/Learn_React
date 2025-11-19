arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
arr3 = [7, 8, 9];

const arrmanipulation = (a, b, c) => {
  // Combine the three arrays into one
  const combinedArray = [...a, ...b, ...c];

  const manipulatedArray = combinedArray.slice(1);
  const uniqueArray = [...new Set(manipulatedArray)];

  const result = uniqueArray
  .filter((num) => num % 2 === 0)
  .map((num) =>  {
    if (num > 4 && num < 10) {
      return num;
    }
  });

  return result.filter((num) => num !== undefined);
};

console.log(arrmanipulation(arr1, arr2, arr3));