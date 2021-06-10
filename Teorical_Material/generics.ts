const names: Array<string> = [];

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    console.log("dqd");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });

interface Lengthy {
  length: number;
}

interface CourseGoal {
  title: string;
  desc: string;
  compUntill: Date;
}

function createCourseGoal(title: string, desc: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.desc = desc;
  courseGoal.compUntill = date;
  return courseGoal as CourseGoal;
}

const namesArr: Readonly<string[]> = ["Max", "Anna"];
