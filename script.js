// JAVASCRIPT PRACTICE PROBLEMS

// 1. TABLE PRINT KARE
// DESCRIPTION: user se koi number le and uska table 10 tk print kare

// var Input = +prompt("Please enter a number:");
// for (var i = 1; i <= 10; i++) 
//     {
//     console.log(`${Input} * ${i} = ${Input * i}`); 
// }

// 2. ARRAY ELEMENTS KA SUM PRINT KARE
// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements ka sum find kar k print kare

// var numbers = [];
// for(var i=0;i<5;i++){
//     numbers[i]= +prompt('Enter your  number')
// }
// console.log(numbers)

// var sum=0;
// for(var i=0;i<5;i++){
//     sum=sum+numbers[i];
// }
// console.log(sum)

//3. ARRAY KA SUB SE BARA NUMBER PRINT KARE
// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements me SUB SE BARA NUMBER find kar k print kare

// var numbers = [];
// for(var i=0;i<5;i++){
//     numbers[i]= +prompt('Enter your  number')
// }
// console.log(numbers)

// var max=numbers[0];
// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   console.log(`The Maximum number is: ${max}`);

// 4. USER SE STRING LE AND USKO ULTA PRINT KARE
// DESCRIPTION:
// 1. user se koi b string input le
// 2. usko reverse me print karde e.g: mehtab -> bathem

// var nam = prompt("Enter Name"); 
// var str = ""; // Initialize str as an empty string

// for (var i = nam.length - 1; i >= 0; i--) { 
//     str = str + nam[i]; 
// }

// console.log(str); // Outputs "demhA"

// 5. FACTORIAL
// DESCRIPTION:
// 1. user se koi b NUMBER input le
// 2. us number ka factorial find kr k print kare
// 3. factorial def:
// the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.
// 4 * 3 * 2 * 1 = 24

// var number = prompt("Enter a number to find factorial"); 
// var fact =1; 
// for (var i = 1; i <= number ; i++)
// { 
//     fact = fact*i; 
// }

// console.log("factroial = "+fact);