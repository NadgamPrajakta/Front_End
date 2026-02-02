// version 1
class Promise {
    constructor(handler) {
        this.status = "pending";
        this.value = null;
      
        const resolve = value => {
            if (this.status === "pending") {
                this.status = "fulfilled";
                this.value = value;
            }
        };
        const reject = value => {
            if (this.status === "pending") {
                this.status = "rejected";
                this.value = value;
            }
        };
      
        try {
            handler(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
  
    then(onFulfilled, onRejected) {
        if (this.status === "fulfilled") {
            onFulfilled(this.value);
        } else if (this.status === "rejected") {
            onRejected(this.value);
        }
    }
}

// testing code
const p1 = new Promise((resolve, reject) => {
    resolve('resolved!');
});
const p2 = new Promise((resolve, reject) => {
    reject('rejected!')
})
p1.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});
p2.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

// 'p1 resolved!'
// 'p2 rejected!'