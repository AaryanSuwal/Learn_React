// Create a function that accepts three paramaters of array of numbers and concats (Join) them and return if one of this meet:
//  4 < num and 10 > num
//  odd number

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5 ,6];
// const arr3 = [7, 8, 9];

// const finalOutput = (a1, a2, a3) => {
//     const combinedArr = [...a1, ...a2, ...a3];
//     const result = combinedArr.map((num) => {
        
//         if ((num > 4 && num < 10) || num % 2 !== 0) {
//             return num;
//         }
//     });
//     return result.filter((num) => num !== undefined );
// }

// console.log(finalOutput(arr1, arr2, arr3));



const SMKathmandu = [
    {
        id: 1,
        fname: "Aaryan Suwal",
        code: "KATHMANDU",
        products: ["laptop", "Keyboard", "Mouse"]
    },
    {
        id: 2,
        fname: "Pawan Shrestha",
        code: "KATHMANDU",
        products: ["Monitor", "Speaker", "Headphone", "Monitor"]
    }
];

const SMBhaktapur = [
    {
        id: 3,
        fname: "Tula Bahadur Thapa",
        code: "BHAKTAPUR",
        products: ["Mousepad", "Chair", "Monitor"]
    },
    {
        id: 4,
        fname: "Safal Bhusal",
        code: "Bhaktapur",
        products: ["Smartphone", "Charger"]
    }
];

const getUserProduct = ()=> {

    const allUser = [...SMKathmandu, ...SMBhaktapur];
    const allProducts = allUser.map((user) => user.products).flat();

    const count = {};
    allProducts.forEach(p => {
        if(!count[p]) {
            count[p] = 1;
        } else {
            count[p] += 1;
        }
    });
    return count
};

const totalItemSold = getUserProduct();

console.log("Total item sold in the supermarket are:");
console.log(getUserProduct());