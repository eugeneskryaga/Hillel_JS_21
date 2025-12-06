// #1

const arr1 = [3, -1, 0, 5, 77, -4];
let posCounter = 0;

for (const element of arr1) {
  if (element > 0) {
    posCounter += 1;
  }
}

console.log(posCounter);

// #2
const arr2 = [1, 4, 7, 10, 13, 16];
let res = [];

for (const element of arr2) {
  if (element % 2 == 0) res.push(element);
}

console.log(res);

// #3

let arr3 = [5, -3, 2, -8, 0];

for (let i = 0; i < arr3.length; i += 1) {
  if (arr3[i] < 0) {
    arr3[i] = 0;
  }
}

console.log(arr3);

// #4

const arr4 = ["red", "green", "blue"];
const toFind = "green";

if (arr4.includes(toFind)) {
  console.log("Знайдено");
} else {
  console.log("Не знайдено");
}

// #5

let arr5 = [4, 0, 5, 0, 2];
arr5.splice(arr5.indexOf(0), 1);
console.log(arr5);

// #6

let arr6 = ["apple", "banana", "pear"];
let str = "";

for (let i = 0; i < arr6.length; i += 1) {
  str = str + arr6[i];
  if (i == arr6.length - 1) {
    continue;
  } else {
    str += ", ";
  }
}

console.log(str);

// #7

const arr7 = [9, 2, 14, -5, 7];
let min = arr7[0];

for (const element of arr7) {
  if (element < min) {
    min = element;
  }
}

console.log(min);

// 8

const arr8 = ["a", "b", "a", "c", "a"];
let counter = 0;

for (const element of arr8) {
  if (element === "a") {
    counter += 1;
  }
}

console.log(counter);

// 9

let arr9 = [5, 7, 9];
const num = 12;

if (num > 10) {
  arr9.push(num);
} else {
  arr9.unshift(num);
}

console.log(arr9);

// 10

const n = 5;
let arr10 = [];

for (let i = 0; i < n; i += 1) {
  arr10.push(1);
}

console.log(arr10);
