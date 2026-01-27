
let Employee={
    "Name":"john",
    "age":"12",
    "city":"pune",
    "country":"usa"


};
console.log(Employee);

Object.freeze(Employee);  

delete Employee.country  // using freeze we cant delete the property

Employee.Name="jonii";

console.log(Employee);

