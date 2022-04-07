function findPrimeFactors(num){
    let primeFactors = [];

    while(num % 2 === 0){
        primeFactors.push(2);
        num = num/2 ;
    }

    let sqrtNumbers = Math.sqrt(num);
    for(let i = 3 ; i <= sqrtNumbers ; i++){
        while( num %i === 0){
            primeFactors.push(i);
            num = num/i ;
        }
    }

        if (num > 2){
            primeFactors.push(num);

        }
        return primeFactors;
    }
    









