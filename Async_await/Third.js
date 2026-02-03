function fetchUser() {
    return new Promise((resolve, reject) => {
        let userFound = false;

        if (userFound) {
            resolve("User found ");
        } else {
            reject("User not found");
        }
    });
}

async function getUser() {
    try {
        let user = await fetchUser();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

getUser();
