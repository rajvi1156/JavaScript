console.log("2" > 1);        // true
console.log("02" > 1);       // true

console.log(null > 0);       // false  
console.log(null == 0);      // false
console.log(null >= 0);      // true

// the reason is that an equality check == and comparision > <>= <= work differently.
// comparisions convert null to a number, trating it as 0. 
// that's why (3) null >=0 is true and (1)null >0 is false.  

console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false

// === 

console.log("2" === 2);     
