const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(res);
    }, 1000);
});

promise.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});
promise.catch((err) => {
    console.log(err);
});
promise.finally(() => {
    console.log("finally over");
});