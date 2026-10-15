
const students = ["Priya", "Arun", "Divya", "Rahul", "Sneha"];

console.log("First student:",students[0]);
console.log("Last student:",students[students.length - 1]);

students.push("Karthik");
console.log("After push:",students);

students.pop();
console.log("After pop:",students);

const selectedStudents = students.slice(1, 4);
console.log("After slice:",selectedStudents);

students.splice(2, 1);
console.log("After splice:",students);

console.log("Is Priya present?",students.includes("Priya"));
