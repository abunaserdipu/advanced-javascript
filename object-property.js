const students = [
  { id: 11, name: "Abu Naser" },
  { id: 43, name: "Ikramul Islam" },
  { id: 78, name: "Shoaib" },
];
const studentsName = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const result = element.name;
    studentsName.push(result);
}

const names = students.map(s => s.name);
const ids = students.map(s => s.id);

const bigger = students.filter((s) => s.id > 23);

const firstOne = students.find((s) => s.id > 10);
console.log(ids);
