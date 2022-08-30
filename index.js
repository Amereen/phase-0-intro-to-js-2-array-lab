const cats= ["Milo", "Otis", "Garfield"]

 
function destructivelyAppendCat(name){

  console.log(name)
  cats.push(name)
}

function destructivelyPrependCat(name)
{
  cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
cats.pop(name)
}
function destructivelyRemoveFirstCat (name){
  cats.shift(name)
}
function appendCat(name){
  const newCats =  [...cats,name]
  return newCats
 }

 function prependCat(name) {

  const newCats= [name, ...cats]
return newCats
 }

 function removeLastCat(){
    const newCats= [...cats]
    newCats.pop()
    return newCats

 }
 function removeFirstCat(){
  const newCats= [...cats]
  newCats.shift()
  return newCats
 }
