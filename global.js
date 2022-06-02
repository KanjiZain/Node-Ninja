// console.log (global);

console.log(__dirname);

global.setTimeout(() => {
    console.log('In the timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log ("In the Interval");
}, 1000);

