// // filter
// const arr = [1, 2, 3, 4, 5, 6, 5, 8, 5, 10];
// const result = arr.filter((num) => num === 5);
// console.log(result);

// // find
// const find = arr.find((num) => num ===5);
// console.log(find);

// // every
// const arr1 = [2, 4, 6, 8, 10, 11];
// const everyResult = arr1.every((num) => num % 2 === 0 );     //Every condition needs to be match
// console.log(everyResult, "<------- Every result");

// // some
// const arr2 = [2, 4, 6, 8, 10, 11];
// const someResult = arr2.some((num) => num % 2 === 0 );     //Only one condition needs to be match
// console.log(someResult, "<------- Some result");

// const fName = "Aaryan";
// const resultname = fName ?? "Tula";
// console.log(resultname);

// const object = {
//     name: undefined,
//     age: 10,
//     hobbies: undefined
// };

// console.log(object.name ?? "N/A");

// console.log(Object.keys(object).length);   //find the key length of the object
// console.log(Object.values(object));        //Finds the value of the object
// console.log(Object.entries(object));       //Finds the entries of the object
// console.log(object.hobbies?.map(() => {}))

// if(1 === 1) {
//     console.log("This condition is true");
// }else {
//     console.log("This condition is false");
// }

// ternary operator
// console.log(1 === 1 ? "true" : "false");

const userData = [
  {
    id: 1,
    name: "aashish",
    role: "lecturer",
  },
  {
    id: 2,
    name: "gagan",
    role: "student",
  },
  {
    id: 3,
    name: undefined,
    role: "lecturer",
  },
];

const roleSearch = () => {
  const arrayLecturer = Boolean(
    userData.find((user) => user.role === "lecturer")
  );
  let result = {};
  if (arrayLecturer) {
    result = userData
      .filter((user) => user.role === "lecturer")
      .map((user) => user.name ?? "N/A");
  }
  return result;
};

console.log(roleSearch());
