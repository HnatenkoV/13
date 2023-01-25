/* =====================task_1===================== */
const greetings = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 3000);
})

greetings.then(() => {
    console.log('hello JS');
});

/* =====================task_2===================== */

function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 4000);
})}

async function doSomething() {
    console.log('first call');
    await delay();
    console.log('second call');
}
doSomething();

/* =====================task_4===================== */

function createDice() {
    return new Promise((resolve, reject) => {
        let res = Math.floor(Math.random() * 10) + 1;
        console.log(res)
        if (res < 6) {
            reject();
        } if (res >= 6) {
            resolve();
        }
    })}


let p1 = createDice();
let p2 = createDice();
let p3 = createDice();


Promise.all([p1, p2, p3])
    .then(
    resolve => {
    console.log('You are lucky reason');
    })
    .catch(
    reject => {
    console.log('Not today')
    });
