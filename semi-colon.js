//causes semi-colon error
function getPerson(){

  return 
  {
    firstname: 'Tony'
  }

}

console.log(getPerson());

//works
function getPersonAgain(){

  return {
    firstname: 'Tony'
  }

}

console.log(getPersonAgain());