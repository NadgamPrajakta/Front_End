
let tiid=setTimeout((v)=>{
    console.log(v);
    
    clearTimeout(tiid);
},4000,["alan","jones"]);

Demo();
console.log("Faster than");


 function Demo(v)
 {
    console.log(v,"***");
    
}

clearTimeout(tiid);