const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolved first one'), 1000);
});
p.then((res) => {
    console.log(res);
    return res + ' do some calculation';
}).then(res => {
    console.log(res);
});

