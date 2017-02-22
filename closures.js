function greet(whattosay){
  return function(name){
    console.log(whattosay + ' ' + name);
  }
}

// greet('Hi')('Tony');
var sayHi = greet('Hi');
sayHi('Tony');

//prints out three 3's
function buildFunctions(){
  var arr = [];

  for (i = 0; i < 3; i++){
    arr.push(
      function(){
        console.log(i);
      }
    )
  }
  return arr;
}

//let prints out correct numbers (ES6) needs separate execution contexts in order to work
var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

function buildFunctions2(){
  var arr = [];

  for (i = 0; i < 3; i++){
    arr.push(
      (function(j){
        return function(){
          console.log(j);
        }
      }(i))
    )
  }
  return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();