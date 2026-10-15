// task 1
for(var i =2; i <= 10; i += 2){
    console.log(i)
}
// task 2
 function getAverage( num1 = 0, num2 = 0){
     if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
 }
getAverage(20,7)

// task 3
function calculateAge(birthYear) {
    console.log(2026 - birthYear);
}
calculateAge(2004);
// task 4
for(var i = 1; i <= 10; i += 2 ){
    console.log(i)
}
// // task 5
function sumNumber(number) {
    var sum = 0;

    for(var i = 1; i <= number; i++) {
        sum += i;
    }

    console.log(sum);
}

sumNumber(5);




