

let ar = [10,20,30,40,50,60,70];
let Sweets = ["Chocolate","Chipsy","juice"];
console.log(Sweets.length);
console.log(ar.length);
console.log(ar.pop());
console.log(ar.shift());
console.log(Sweets.pop());//remove last element
console.log(Sweets.shift());//remove first element
console.log(ar.splice(1,2));//remove middle elements

//condition statements
var x;
var y;
if (x < 10) {
  y = "Good morning";
} else if (x < 20) {
  y = "Good day";
} else {
  y = "Good evening";
}
//functions
function factorial(n){
    var fact = 1;
    for(i=n;i>=1;i--){
        fact *= i; 
    }

    return fact;
}
//n! = n*n-1*n-2*...*1

console.log(factorial(10));

 
//string
let fname = "Toqa";

const str = 'Playcode';

console.log(fname.substr(1,4));
console.log(str.substr(5));


parseInt()
function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0; }
  return parsed * 100;
}

console.log(roughScale(' 0xA', 16));

console.log(roughScale('3030', 2));
// expected output: 0
parseFloat()
function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(5.168));

console.log(circumference('5.168abcdefgh'));

console.log(circumference('abcdefgh'));
// expected output: NaN

let jsonobj ={
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}

console.log(jsonobj.browsers.firefox.name);

let stringjson = JSON.stringify(jsonobj);
console.log(stringjson);

let newobj = JSON.parse(stringjson);
console.log(newobj.browsers.firefox.pref_url);
