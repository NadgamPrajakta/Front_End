function uploadFile(fileSize) {
    return new Promise((resolve, reject) => {
        if (fileSize <= 5) {
            resolve("File uploaded successfully");
        } else {
            reject("File size too large");
        }
    });
}

async function upload() {
    try {
        let response = await uploadFile(3);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

upload();
