var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function(){
    return this.firstname + ' ' + this.lastname;
  }
}

var john = {
  firstname: 'John',
  lastname: 'Doe'
}

// DONT EVER DO, DEMO ONLY
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);

for (var prop in john){
  
  console.log(prop + ': ' + john[prop]); //loops all properties in john object and prototypes
  if (john.hasOwnProperty(prop)){
    console.log("John Object " + prop + ': ' + john[prop]);
  } //loops all properties in john object
} 

var jane = {
  firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());

var janes = {
  address: '111 Main St.',
  getFormalFullName: function(){
    return this.lastname, + ', ' + this.firstname;
  }
}

var jim = {
  getFirstName: function(){
    return firstname;
  }
}

//needs underscore library
_.extend(john, janes, jim); //combines methods and properties and adds them to john object
console.log(john);
