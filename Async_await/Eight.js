function processPayment(balance, amount) {
    return new Promise((resolve, reject) => {
        if (balance >= amount) {
            resolve("Payment successful");
        } else {
            reject("Insufficient balance");
        }
    });
}

async function makePayment() {
    try {
        let result = await processPayment(5000, 3000);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

makePayment();
