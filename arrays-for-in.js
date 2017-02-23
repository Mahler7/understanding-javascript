Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr){
  console.log(prop + ': ' + arr[prop]);
}