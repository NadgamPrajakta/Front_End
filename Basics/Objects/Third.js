
let Student ={
    "Name":"john",
    "age":"12",
    "city":"pune",
    "country":"usa"
};

Object.seal(Student);

delete Student.Name; 

Student.age="34";

Student.country="lature";

console.log(Student);