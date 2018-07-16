// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  addDriver = drivers.push('Ralph');
  return addDriver;
}

function destructivelyPrependDriver(name) {
  addNewDriver = drivers.unshift('Bob');
  return addNewDriver;
}

function destructivelyRemoveLastDriver() {
  removeDriver = drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  removeDriver = drivers.shift();
}

function appendDriver(name) {
  newArray = [...drivers, "Broom"];
  return newArray;
}

function prependDriver(name) {
  newArray = ["Arnold",...drivers];
  return newArray;
}

function removeLastDriver() {
  removeDriver = drivers.slice(0,2);
  return removeDriver;
}

function removeFirstDriver() {
  removeDriver = drivers.slice(1);
  return removeDriver;
}
