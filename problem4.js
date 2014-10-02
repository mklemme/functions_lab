// Add two numbers

function add(a,b){
  return a+b;
}
console.log(add(2,1));


// subtract two numbers
function sub(a,b){
  return a-b;
}
console.log(sub(2,1));


// do function for false and true
function combine(a,b,c){
  if(c === true){
    return a+b;
    // adds if true
  }
  else{
    return a-b;
    // subtracts if true
  }
}
console.log(combine(2,1,false));