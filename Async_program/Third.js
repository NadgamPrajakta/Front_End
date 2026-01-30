

let counter=0;

 let id=setInterval((a, b, c)=>{
    console.log(a+b+c);

    counter++;
    
    if(counter==5)
    {
        clearTimeout(id);
    }
    
},5000, 50, 80, 90)
