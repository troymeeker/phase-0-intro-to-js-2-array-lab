// Write your solution here!
const cats = ["Milo", "Otis","Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
 cats.pop()
}

function destructivelyRemoveFirstCat(){
  cats.shift()
}

function appendCat(name){
  const newCat = [...cats,name]
    return newCat;
}
appendCat("Broom");

function prependCat(name){
  const catNew = [name, ...cats]
  return catNew;
}
prependCat("Joe");

function removeLastCat(){
  return cats.slice(0, cats.length - 1);
}



function removeFirstCat(){
  return cats.slice(1);
}