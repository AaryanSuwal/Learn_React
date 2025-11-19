const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

// const finalarr = [...arr, ...arr2];

// console.log(finalarr);

// const finalArr = ()=> {}     // arrow function

// Type of inbuilt loops in JavaScript

// map loop
// finalarr.map((num) => {
//     // console.log(num% 2 == 0);
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// });

// // for each loop
// finalarr.forEach((num) => {
//     if (num % 2 !== 0) {
//         console.log(num);
//     }
// });


const oddNumberFunc = (a1, a2)=> {
    const finalArr = [...a1, ...a2];
    const result = finalArr.map((num) => {
        if (num % 2 !== 0) {
            return num;
        }
    });
    return result;
};

console.log(oddNumberFunc(arr, arr2));