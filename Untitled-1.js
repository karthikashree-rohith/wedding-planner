
function sumFibonacci(){
    let sum =0;
    let fibonacciArray = fibonacciSeries();
    for(let i=0 , n=fibonacciArray.length; i<n; i++){
        sum += fibonacciArray[i];

    }
    return sum;
}

function fibonacciSeries(){
    let a = 1;
    let b =2;
    let add = a+b;
    let fibonacciArray =[];
    while(add < 4000000){
        if(add%2 ===0){
            fibonacciArray.push(add);
        }
    }
    return fibonacciArray();
}