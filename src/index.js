// *************** Ascesnding Oreder with 2nd higher num
// let array = [11, 33, 55, 22, 44];
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (array[i] < array[j]) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }
// let ascending = array;
// console.log(ascending[1]);

// *************** descesnding Oreder with 2nd higher num
// let array = [11, 33, 55, 22, 44, 45];
// for (let i = 0; i < array.length; i++) {
//   for (let j = i; j < array.length; j++) {
//     if (array[i] < array[j]) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }
// let descending = array;
// console.log(descending[1]);

//  ***************** Reverse string
//  +++++++++ In-built method
// let str = "I love javascript";
// let reverse = str.split(" ").reverse().join(" ");
// console.log(reverse);

// reverse using reduce method
// let str = "Hello Sayli";
// let reduce = str.split(" ").reduce((acu, cur) => {
//   return cur + " " + acu;
// });

// console.log(reduce);

//  +++++++++ Without In-built method
// let str = "I love javascript";
// let split = str.split(" ");
// let reverse = " ";
// for (let i = 0; i < split.length; i++) {
//   reverse = split[i] + " " + reverse;
// }
// console.log(reverse);

//  ********** reverse string with function
// function reverse(str) {
//   if (str == "") {
//     return "Enter valid str";
//   } else {
//     let split = str.split(" ");
//     let reverse_str = " ";
//     for (let i = 0; i < split.length; i++) {
//       reverse_str = split[i] + " " + reverse_str;
//     }
//     return reverse_str;
//   }
// }
// console.log(reverse("hello sayli"));
// console.log(reverse("hello prisha"));
// console.log(reverse(""));

// **************** Find prime number
// function prime(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return `${number} is not prime`;
//     } else {
//       return `${number} is prime`;
//     }
//   }
// }
// console.log(prime(7));

// ****************  with for loop
// function prime(num) {
//   let isprime;
//   for (let i = 2; i <= num; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isprime = 0;
//         break;
//       } else {
//         isprime = 1;
//       }
//     }
//     if (isprime === 1) {
//       console.log(i);
//     }
//   }
// }
// prime(20);

// ************** Fibonacci series
// function fibonacci(num) {
//   let first = 0;
//   let second = 1;
//   let next;
//   for (let i = 0; i <= num; i++) {
//     console.log(first);
//     next = first + second;
//     first = second;
//     second = next;
//   }
// }
// fibonacci(8);

// ******************* Sort number
// ********* sorting with 1st same digit
// let number = [1, 3, 2, 9, 4, 6, 5, 8, 7, 12, 22, 33];
// let sort_num = number.sort();
// console.log(sort_num);

// ********* sorting with sequence
// let sort_num = number.sort((a, b) => a - b);
// console.log(sort_num);

// ****************** Sort alphabets
// let letters = ["P", "AA", "C", "B", "D", "Q", "F", "R"];
// let sort_alpha = letters.sort((a, b) => a.localeCompare(b));
// console.log(sort_alpha);

//  Find unique number
// let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8];
// let unique = [...new Set(array)];
// console.log(unique);

// let unique = array.filter((item, index) => {
//   return array.indexOf(item) == index;
// });
// console.log(unique);

// ******************* Find dublicates
// let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8];
// let unique = [];
// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] == array[j]) {
//       unique.push(array[i]);
//     }
//   }
// }
// console.log(unique);

// **************** Palindrom
// function palindrom(str) {
//   let split = str.split("").reverse().join("");
//   if (str === split) {
//     console.log(`${str} is palindrome`);
//   } else {
//     console.log(`${str} is not palindrome`);
//   }
// }
// palindrom("MOM");

// ***************** for loop
// function palindrom(str) {
//   let ans = "";
//   for (let i = 0; i < str.length; i++) {
//     ans = str[i] + ans;
//     if (ans === str) {
//       console.log(`${str} is palindrome`);
//     } else {
//       console.log(`${str} is not palindrome`);
//     }
//   }
// }
// palindrom("MOM");

// ******************* Find the addition of two num from array
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let find_add = 15;
// let answer = [];
// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] + array[j] == find_add) {
//       answer.push(`Item1 :  ${array[i]}, Item2:  ${array[j]}`);
//     }
//   }
// }
// console.log(answer);

// ******************** Find the occurance
// function occurance(str) {
//   let result = [];
//   if (str == "") {
//     console.log("Enter valid string");
//   }
//   for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//       if (str[i] == str[j] && j < i) {
//         count++;
//         break;
//       } else if (str[i] == str[j]) {
//         count++;
//       }
//     }
//     if (count > 0) {
//       result.push({ [str[i]]: count });
//     }
//   }
//   console.log(...result);
// }
// occurance("SAYALII");

//  **************** using reduce method
//  ********* when its string 1st split ecch element
// let str = "ssaayylliiii";
// let occurance = str.split("").reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});
// console.log(occurance);

//  ********* when its array used direct array method
// let array = ["a", "b", "c", "a", "b", "c"];
// let array = ["sayli", "prisha", "prasad", "sayli", "prisha", "prasad"];
// let occurance = array.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});
// console.log(occurance);

// ***************** 1st letter capital only
// let input = "my name is shakira";
// console.log(input);
// let split = input.split(" ");
// console.log(split);
// let capital = split.map((item) => {
//   return item.charAt(0).toLocaleUpperCase() + item.slice(1);
// });
// console.log(capital);

// ***************** all 1st letter join
// let input = "my name is shakira";
// console.log(input);
// let split = input.split(" ");
// console.log(split);
// let capital = split.map((item) => {
//   return item.charAt(0).toLocaleUpperCase();
// });
// console.log(capital.join(""));

// find -ve value & their index
// let input = [5, 7, -6, -8, -1, 5, 4, -9];
// let ans = input.filter((item, index) => {
//   if (item < 0) {
//     console.log(index, item);
//   }
// });

// calculate sum of the age
// let input = [
//   { name: "sayli", age: 27 },
//   { name: "sayli1", age: 27 },
//   { name: "sayli2", age: 27 }
// ];
// // find age only
// let age = input
//   .map((item) => {
//     return item.age;
//   })
//   .reduce((acc, cur) => {
//     acc = acc + cur;
//     return acc;
//   });
// console.log(age);

// replace
// let input = ["apple", "banana", "orange", "banana"];
// let str = input.toString();
// let replace = str.replace("banana", "kiwi");
// console.log(replace.split(" "));

//   find longest word
// let input = "hello dear beautiful";
// let split = input.split(" ");
// console.log(split);
// let length = split.filter((item) => {
//   if (item.length > 7) {
//     return item;
//   }
// });
// console.log(length);

// count vowels & find vowels
// function count_vowels(str) {
//   let count = 0;
//   let ans = [];
//   let vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);
//     if (vowels.includes(str[i])) {
//       count++;
//       ans.push(str[i]);
//     }
//   }
//   return `Count is : ${count} and vowels are : ${ans} `;
// }
// console.log(count_vowels("sayli"));

// remove vowels
// function remove_vowels(str) {
//   let split = str.split("");
//   let ans = [];
//   let vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < split.length; i++) {
//     if (vowels.includes(split[i])) {
//       continue;
//     }
//     ans += split[i];
//   }
//   return ans;
// }
// console.log(remove_vowels("sayli"));

