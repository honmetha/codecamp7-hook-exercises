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