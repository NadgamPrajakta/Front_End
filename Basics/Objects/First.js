
let obj = {
    "id":"1212",
    "name":"demo",
    "salary":"1234122"


};
console.log(obj);

console.log(Object.values(obj));  
console.log(Object.keys(obj));
console.log(Object.entries(obj));

let obj2={

    "number ":123456789
};

console.log("======================================================================");
Object.assign(obj2,{name:"sdeo",id:23,salary:5678},obj);
console.log(obj2);

