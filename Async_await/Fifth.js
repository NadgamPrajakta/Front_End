function getProduct(productAvailable) {
    return new Promise((resolve, reject) => {
        if (productAvailable) {
            resolve("Product is available");
        } else {
            reject("Product out of stock");
        }
    });
}

async function checkProduct() {
    try {
        let product = await getProduct(true);
        console.log(product);
    } catch (error) {
        console.log(error);
    }
}

checkProduct();
