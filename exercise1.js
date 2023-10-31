class Student {
  name;
  email;
  age;
  score;

  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

const student1 = new Student(
  "John Doe",
  "johndoe@email.com",
  new Date("12-01-1992"),
  80
);

const student2 = new Student(
  "Jane Doe",
  "janedoe@email.com",
  new Date("12-01-1993"),
  60
);

const student3 = new Student(
  "Adam",
  "adam@email.com",
  new Date("12-01-1994"),
  70
);

const student4 = new Student(
  "Eve",
  "eve@email.com",
  new Date("12-01-1995"),
  90
);

const calcAge = (dateString) => {
  const birthYear = dateString.getFullYear();
  const birthMonth = dateString.getMonth();
  const birthDay = dateString.getDate();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  let yearDiff = year - birthYear;
  if (birthMonth > month) {
    yearDiff -= 1;
  } else if (birthMonth === month) {
    if (birthDay > day) {
      yearDiff -= 1;
    }
  }

  return yearDiff;
};

const calculateScoreAndAge = (input) => {
  const sortedScore = input.map((item) => item.score).sort((a, b) => a - b);
  const avgScore =
    sortedScore.reduce((acc, curr) => (acc += curr), 0) / sortedScore.length;

  const score = {
    Highest: sortedScore[sortedScore.length - 1],
    Lowest: sortedScore[0],
    Average: avgScore,
  };

  const sortedAge = input
    .map((item) => calcAge(item.age))
    .sort((a, b) => a - b);

  const avgAge =
    sortedAge.reduce((acc, curr) => (acc += curr), 0) / sortedAge.length;

  const age = {
    Highest: sortedAge[sortedAge.length - 1],
    Lowest: sortedAge[0],
    Average: avgAge,
  };

  return {
    Score: score,
    Age: age,
  };
};

console.log(
  "calculatedScoreAndAge:",
  calculateScoreAndAge([student1, student2, student3, student4])
);
