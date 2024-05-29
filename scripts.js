console.log('JavaScript Types Excercise');

function exercise1() {
  const number = 1;
  return number;
}

function exercise2() {
  const number = 1.5;
  return number;
}

function exercise3() {
  const message = "Hello World";
  return message;
}

function exercise4() {
  const groupedItems = ["cat", "Hello World", 4];
  return groupedItems;
}

function exercise5() {
  const object = {
    key1 : "Hello World",
    key2 : 4,
  }
  return object;
}

function exercise6() {
  const value = false;
  return value;
}

console.log('This should be a number:', exercise1());
console.log('This should be a floating point number:', exercise2());
console.log('This should be a string saying "Hello World":', exercise3());
console.log( 'This should be an array that includes a string, "Hello World," and a number 4:', exercise4());
console.log('This should be an object that has key-value pairs, key1 -> "Hello World" and key2 -> 4:', exercise5());
console.log("This should be a boolean value that returns 'false':",exercise6());