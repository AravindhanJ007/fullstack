const student = {
    name: "Priya",
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};

console.log(student.name);

console.log(student.address.city);

//console.log(student.address.state);


const student1 = {
    name: "priya",
    age: 21,
    course: "react"
};

const { name, age, course } = student1;

console.log(name);
console.log(age);
//console.log(course);


const user = {
    name: "priya"
};
const {
    name: studentName,
    city = "chennai"
} = user;

console.log(studentName);
//console.log(city);

const original ={
  name:"edwin",
  age:21
};

const updated ={
  ...original,
  age:22,
  city:"chennai"
};

console.log(original);
//console.log(updated);

constuser = {
    name: "priya",
    address: {city: "chennai"}
};
console.log(user.address?.city);
console.log(user.contact?.name);
//console.log(user.company?.name);    


console.log(original);
console.log(updated);//

const username =null;
const age1 =0;
const city2 = undefined;
console.log(username||"guest");
console.log(age1|| 18);
//console.log(city2||"chennai");


