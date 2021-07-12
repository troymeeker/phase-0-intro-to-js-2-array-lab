// Write your solution here!
const cats = ["Milo", "Otis","Garfield"]

function destructivelyAppendCat(name){
 cats.push('Ralph');
}

function destructivelyPrependCat(name){
  cats.unshift('Bob');
}

function destructivelyRemoveLastCat(name){
  cats.pop();
}
function destructivelyRemoveFirstCat(){
  cats.shift();
}
function appendCat(name){
  const newCat = [...cats,name];
  return newCat;
}
appendCat('hick');

function prependCat(name){
  const catNew = [name,...cats];
  return catNew;
}
prependCat('Scabbers');

function removeLastCat(){
  return cats.slice(0,cats.length-1);
  
}
removeLastCat();

function removeFirstCat(){
  return cats.slice(1);
}