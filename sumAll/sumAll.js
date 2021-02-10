const sumAll = function(lowNum, highNum) {
    let fullSum = 0;
    let currentSum = 0;
    let counter = 0;
    let temp = 0;
    
    if (!Number.isInteger(lowNum) || !Number.isInteger(highNum)) return 'ERROR';
    if (lowNum < 0 || highNum < 0) return 'ERROR';

    if (lowNum > highNum){
        temp = lowNum;
        lowNum = highNum;
        highNum = temp;
    }

    while (counter <= highNum){
        fullSum = fullSum + counter;
        counter++;
    }


    return fullSum;

    }

    



module.exports = sumAll
