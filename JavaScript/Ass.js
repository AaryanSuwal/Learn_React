// Create a function that accepts three paramaters of array of numbers and concats (Join) them and return if one of this meet:
//  4 < num and 10 > num
//  odd number

const arr1 = [1, 2, 3];
const arr2 = [4, 5 ,6];
const arr3 = [7, 8, 9];

const finalOutput = (a1, a2, a3) => {
    const combinedArr = [...a1, ...a2, ...a3];
    const result = combinedArr.map((num) => {
        
        if ((num > 4 && num < 10) || num % 2 !== 0) {
            return num;
        }
    });
    return result.filter((num) => num !== undefined );
}

console.log(finalOutput(arr1, arr2, arr3));
