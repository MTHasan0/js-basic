
function oddSum(numbers){
    const odds = [];
    
    for(const number of numbers){
        if (number % 2 === 1){
            odds.push(number);

        }

    }

    let sum = 0;
    for (const number of odds){
        sum = sum + number;
    }

    const count = odds.length;

    const avg = sum / count;
    return avg;

}

const numbers = [10, 17, 15, 16, 166, 188, 99, 7, 21, 19];

const avg = oddSum(numbers);


console.log("Average number of odds: " +avg );