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
    faculty: ["Web Development", "React"],
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
    faculty: ["Web Development", "Java"],
  },
];

const getuserFaculty = () => {
  let allFaculty = [];

  userData.forEach((user) => {
    user.faculty.forEach((classes) => {
      if (!allFaculty.includes(classes)) {
        allFaculty = [...allFaculty, classes];
      }
    });
  });
  return allFaculty;
};

console.log(getuserFaculty());

const uniqueSubject = (userId) => {
  const allSubject = getuserFaculty();
  const userDetail = userData.find((user) => user.id === userId);

  const userSubject = userDetail.faculty;
  const uniqueSubjectForUser = allSubject.find(
    (sub) => !userSubject.includes(sub)
  );
  return uniqueSubjectForUser;
};

const assignClassToStudent = () => {
  let updatUser = [];
  updatUser = userData.map((user) => {
    if (user.role === "student") {
      return user;
    } else {
      // if (user.faculty.length < 3) {
      return {
        ...user,
        faculty: [...user.faculty, uniqueSubject(user.id)],
      };
      // }
    }
  });
  return updatUser;
};

console.log(assignClassToStudent());
