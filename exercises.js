// Ex 1
let array1 = [1, 2, 30, 400];
let array2 = array1.filter(item => {
  return item > 10;
});

// Ex 2
let array1 = [1, 2, 3, 4];
let array2 = array1.filter(item => {
  return item % 2 != 0;
});

// Ex 3
let array1 = [1, "1", 2, {}];
let array2 = array1.filter(item => {
  return (typeof item) === "number";
});

// Ex 4
let array1 = ["apple", "banana", "orange", "pineapple", "watermeon"];
let array2 = array1.filter(item => {
  return item.length > 6;
});

// Ex 5
let array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 },
];
let array2 = array1.filter(item => {
  return item.age < 18;
});

// Ex 6
let array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 },
];
let array2 = array1.filter(item => {
  return item.age !== 32;
});

// Ex 7
let array1 = [1, -3, 2, 8, -4, 5];
let array2 = array1.filter(item => {
  return item > 0;
});

// Ex 8
let array1 = [1,3,4,5,6,7,8];
let array2 = array1.filter(item => {
  return item % 3 === 0;
});

// Ex 9
let array1 = ["peach", 1, -3, "2", {}, []];
let array2 = array1.filter(item => {
  return (typeof item) === "string";
});

// Ex 10
let array1 = ["APPLE", "appLE", "PEACH", "PEach"];
let array2 = array1.filter(item => {
  return item === item.toUpperCase();
});

// Ex 11
let array1 = [
  { name: "apple", birth: "2001-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
  { name: "peach", birth: "2002-10-13" },
];
let array2 = array1.filter(item => {
  return item.birth.slice(5, 7) == 10;
});

// Ex 12
let array1 = [
  { name: "apple", birth: "2001-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
  { name: "peach", birth: "2002-10-13" },
];
let array2 = array1.filter(item => {
  return item.birth.split("-")[0] < 2000;
});