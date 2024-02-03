// // -----------------sumession--------------

// let number = 1;

// let sum = 0;

// while(number<10){
//     sum = sum + number;
//     console.log(sum);

//     number++;



// }

// // ----------------------even number-------------------------
// let num = 1;
// while(num <= 10){
//     if(num % 2 === 0){
//         console.log("Even Number: ", num);
//     }
//     num++;
// }

// for(let i = 0; i<=20; i+=2){
//     console.log("Number:", i);
// }
// for(let i = 1; i<=20; i+=2){
//     console.log("Number:", i);
// }


// // ----------summesion----------

// let a = 0;
// for(i = 11; i<=20; i++){
//     a = a + i;
    
// }
// console.log("Sum: ", a);

const array = [1, 2, 3, 4, 5, 6, 7];

  for (let i = 1; i < array.length; i++) {
    if (i == 5) {
     continue;
    }
    console.log(array[i]);
   }