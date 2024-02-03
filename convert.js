function inchToFeet(inch){
    const feet = inch / 12;
    return feet; 
}

const mtsHeight = inchToFeet(65);

console.log(mtsHeight);