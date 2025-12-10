const userData = [
  {
    id: 1,
    name: "aashish",
    role: "lecturer",
    experience: 5,
    faculty: ["React", "adv React", "Python"],
  },
  {
    id: 2,
    name: "gagan",
    role: "student",
    classes: ["Web Development", "React", "Python"],
  },
  {
    id: 3,
    name: undefined,
    role: "lecturer",
    experience: 3,
    faculty: [".Net", "adv React", "Java"],
  },
  {
    id: 4,
    name: "aaryan",
    role: "student",
    classes: ["Web Development", "Java"],
  },
];

// aauta esto function josle chai student xa ki xna check garxa array ma. Yeadi xa vhyne usko key ma experience 0 add gara.

const stdSearchandAddExperience = () => {
  const studentExist = userData.some((user) => user.role === "student");

  if (!studentExist) {
    console.log("No student recordds found in this array.");
  } else {
    const updateUserData = userData.map((user) => {
      if (user.role === "student") {
        return {
          ...user,
          experience: 0,
        };
      }
      return user;
    });
    return updateUserData;
  }
};

console.log(stdSearchandAddExperience());

