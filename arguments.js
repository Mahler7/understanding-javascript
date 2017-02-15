function greet(firstname, lastname, language, ...other){
  
  // language = language || 'en';

  if (arguments.length === 0){
    console.log("Missing parameters");
  }

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log("arg: 0 " + arguments[0]);
  console.log("------");
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');
greet('John', 'Doe', 'es', '111 Main St.', 'NY');

function secondGreet(firstname, lastname, language){
  if (language === 'en'){
    console.log("Hello " + firstname + " " + lastname);
  }

  if (language === 'es'){
    console.log("Hola " + firstname + " " + lastname);
  }
}

function greetEnglish(firstname, lastname){
  secondGreet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname){
  secondGreet(firstname, lastname, 'es');
}

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');

