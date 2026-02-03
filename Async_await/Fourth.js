function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        if (username === "admin" && password === "1234") {
            resolve("Login successful");
        } else {
            reject("Invalid credentials");
        }
    });
}

async function login() {
    try {
        let result = await loginUser("admin", "1234");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

login();
