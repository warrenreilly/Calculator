var num;
var op;
var num2 = 0;
var ans;

function buttonpress(keys) {
  if (op != undefined){
    num2 = num2 + keys;
    console.log(num2);
  } 
  document.getElementById("topScreen").innerText = document.getElementById("topScreen").innerText + keys;
}

function operator(params) {
  num = document.getElementById ("topScreen").innerText;
  op = params;


  document.getElementById("topScreen").innerText = document.getElementById("topScreen").innerText + params;

  // function topScreen(ans) {
  //   num =  keys;
  //   op = params;
  //   num2 = keys;
    
  // }
}

function equals() {

if (op == "+") {

    console.log("num1 is " + num);
    console.log("num2 is " + num2);
    ans = parseFloat(num)+ parseFloat(num2);

    document.getElementById("screen").innerText = ans;
  }

  if (op == "-") {
     ans = parseFloat(num) - parseFloat(num2);

    document.getElementById("screen").innerText = ans;
  }

  if (op == "*") {
    ans = parseFloat(num) * parseFloat(num2);

    document.getElementById("screen").innerText = ans;
  
  }

  if (op == "/") {
    ans = parseFloat(num) / parseFloat(num2);

    document.getElementById("screen").innerText = ans;

    
  }

  clrbutton();
}

function clrbutton (equals) {

  num = 0;
  num2 = 0;
  op = undefined;

  console.log("clear button says num2 is" + num2);
  document.getElementById("topScreen").innerText = "";

  if (equals == true) {

    document.getElementById("screen").innerText = "";

  }

  


}

