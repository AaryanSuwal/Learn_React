const BBKoteshworUserData = [
    {
        id: 1, 
        fname: "Aaryan",
        Lname: "Suwal", 
        code: "BBKoteshwor",
        product: ["chips", "chocolate", "soda"],
    },
    {
        id: 2, 
        fname: "Bijay",
        Lname: "Budha", 
        code: "BBKoteshwor",
        product: ["Pressure Cooker", "Shampoo", "Rice"],
    }
];

const BBTokhaUserData = [
    {
        id: 3, 
        fname: "Pawan",
        Lname: "Shrestha", 
        code: "BBTokha",
        product: ["Diaper", "chocolate", "soda"],
    },
    {
        id: 4, 
        fname: "Tula",
        Lname: "Bahadur Thapa", 
        code: "BBTokha",
        product: ["Cricket bat", "Ball", "Gloves"],
    }
];

const getUserProduct =()=> {
    const allUser = [...BBKoteshworUserData, ...BBTokhaUserData];

    // console.log(allUser[0].product);
  
    const result = allUser
        .filter((user) => user.id % 2 === 0 && user.code === "BBTokha")
        .map((user) => user.product);
    return result.flat();
};

console.log(getUserProduct());


// Assignment 

// {
//     cricket bat:2
//     ball:1
// }