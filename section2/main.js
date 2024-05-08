function logUpto(n){
    for(let i = 1; i <= n; i++){
        console.log(i);
    }
}
// let t1 = performance.now();
// logUpto(10);
// let t2 = performance.now();
// console.log(t2 - t1);


function logAtmost10(n){
    for(let i = 1; i <= Math.min(n, 10); i++){
        console.log(i);
    }
}
// let t1 = performance.now();
// logAtmost10(4);
// let t2 = performance.now();
// console.log(t2 - t1);
// logAtmost10(100)


function logAtleast10(n){
    for(let i = 1; i <= Math.max(n, 10); i++){
        // console.log(i);
    }
}
// let t1 = performance.now();
// logAtleast10(1000);
// let t2 = performance.now();
// console.log(t2 - t1);
