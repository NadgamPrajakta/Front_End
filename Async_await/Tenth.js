function isEven(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve("Number is even");
        } else {
            reject("Number is odd");
        }
    });
}

async function checkNumber() {
    try {
        let result = await isEven(10);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

checkNumber();
