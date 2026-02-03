function verifyOTP(otp) {
    return new Promise((resolve, reject) => {
        let correctOTP = 123456;

        if (otp === correctOTP) {
            resolve("OTP verified successfully");
        } else {
            reject("Invalid OTP");
        }
    });
}

async function otpCheck() {
    try {
        let result = await verifyOTP(123456);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

otpCheck();
