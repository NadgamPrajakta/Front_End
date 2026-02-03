function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Async data loaded 🚀");
        }, 2000);
    });
}

async function showData() {
    let result = await getData();
    console.log(result);
}

showData();
