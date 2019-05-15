var kittens = [
  "Milo",
  "Otis",
  "Garfield"
] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
  var newKittens = kittens.concat(name);
  return newKittens;
}

function prependKitten(name) {
  var newerKittens = kittens.slice(name);
  return newerKittens;
}

function removeLastKitten() {
  var lessKittens = kittens.pop();
  return lessKittens;
}

function removeFirstKitten() {
  var firstGoneKitten = kittens.shift();
  return firstGoneKitten;
}