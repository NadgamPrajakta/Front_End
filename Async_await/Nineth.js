function stepOne() {
    return Promise.resolve("Step 1 done");
}

function stepTwo() {
    return Promise.resolve("Step 2 done");
}

async function executeSteps() {
    try {
        let s1 = await stepOne();
        console.log(s1);

        let s2 = await stepTwo();
        console.log(s2);
    } catch (error) {
        console.log(error);
    }
}

executeSteps();
