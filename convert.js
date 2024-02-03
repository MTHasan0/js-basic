function inchToFeet(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);

    const inchRemaining = inch % 12;
    const result = feetNumber + ' feet ' + inchRemaining + ' inch ';
    return result;
}

const mtsHeight = inchToFeet(61);

console.log(mtsHeight);



function milesToKm(mile){
    const kmNumber = mile * 1.60934;
    return kmNumber;

}

const kmNum = milesToKm(20);
console.log(kmNum);


function kmToMile(km){
    const mileNumber = km / 0.621371;
    const kmFruction = parseInt(mileNumber);

    const kmRemaining = km % 0.621371;

    const kmResult = kmFruction + ' km ' + kmRemaining + ' m ';

    return kmResult;
}

const mileNum = kmToMile(10);

console.log(mileNum);