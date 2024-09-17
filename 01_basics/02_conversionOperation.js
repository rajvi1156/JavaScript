let score =undefined

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "rajvi"

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "rajvi" => true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


//******************************************  Operation  ******************************************************/

let value = 3
let negValue = -3
console.log(negValue);  // -3 

let str1 = "hello "
let str2 = "world"
let str3 = str1 + str2;
console.log(str3);     // hello world 

console.log("1" + 2);      // 12
console.log(1 + "2");      // 12
console.log("1" + 2 + 2);  // 122
console.log(1 + 2 + "2");  // 32

console.log(true);  //  true
console.log(+true); //  1.  do not use 
console.log(+"");   //  0.  do not use

let num1 ,num2, num3
num1 = num2 = num3 = 2 +3. // do not use 

let gameCounter =100
gameCounter++;
console.log(gameCounter);    // 101





