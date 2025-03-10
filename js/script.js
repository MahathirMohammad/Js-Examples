 // JS ex-1
 function dateShow(){
 	document.getElementById('sd').innerHTML=Date();
 }
// JS ex-3 start
 function textChange(){
 	document.getElementById('tc').innerHTML="SAY WALAIKUMUS SALAM";
 }
 // Ex-3 end
 // Ex-4 start
 function bulbOff(){
 	document.getElementById('boo').src="images/bulboff.gif";
 }
 function bulbOn(){
 	document.getElementById('boo').src="images/bulbon.gif";
 }
 // Ex-4 end
  // Ex-5 start
 function colorChange(){
 	document.getElementById('css').style.color="red";
 }
 function fontChange(){
 	document.getElementById('font').style.fontSize="40px";
 }
 // Ex-5 end
 // Text show/hide start
 function textShow(){
 	document.getElementById('sh').style.display="block";
 }
 function textHide(){
 	document.getElementById('sh').style.display="none";
 }

 //Text showhide end
 // Let start
 let number1 = 5;
 let number2 = 6;
 let result = number1+number2;

 function sLet(){
 	document.getElementById('sLet').innerHTML="The result is:" +  result;
 }
 //let end
 // Var start
 var number4 = 30;
 var number3 = 20;
 var Output  = number4-number3;

 function sVar(){
 	document.getElementById('sVar').innerHTML="The result is:"+ Output;
 }
 // Var start
 // let and const start
const number5 = 50;
const number6 = 10;
let Result = number5*number6;

function sLetConst(){
 	document.getElementById('sLetC').innerHTML="The result is:"+ Result;
 }
 // let and const end

 // MULTIPLY DIVIDE ADD & SUBSTRACT start
let x = 5;
let y = 10;
    x*=y;

function sShort(){
    document.getElementById('s').innerHTML="The result is:"+ x;
 }
// DIVIDE START
let x1 = 10;
let y1 = 5;
    x1 /= y1;

function sDivide(){
    document.getElementById('s1').innerHTML="The result is:"+ x1;
 }

 // ADD START
let x2 = 10;
let y2 = 5;
    x2 += y2;

function sAdd(){
    document.getElementById('s2').innerHTML="The result is:"+ x2;
 }
// SBSTRACT START
let x3 = 10;
let y3 = 5;
   x3 -= y3;

function sMinus(){
    document.getElementById('s3').innerHTML="The result is:"+ x3;
 }
// PERCENTAGE equal START
let x4 = 5;
let y4 = 10;
   x4 %= y4;

function sPercent(){
    document.getElementById('s4').innerHTML="The result is:"+ x4;
 }
 //EQUAL START
let y5 = 5;
let x5 = y5;

function sEqual(){
    document.getElementById('s5').innerHTML="The result is:"+ x5;
}
// Show text start
let y6 = "Hello";
    x6 = y6+ "World";

function sHello(){
    document.getElementById('s6').innerHTML="The result is:"+ x6;
}
// PERCENTAGE equal end
 // Js expressions start 
function sJohn(){
    document.getElementById('John').innerHTML="John"+ " "+ "Abraham";
}

 // Js expressions end 
 // LOGICAL Value START
let x7 = 100;
    x7 &= 6;

function sAnd(){
    document.getElementById('s7').innerHTML="The Value is:"+ x7;
}
// |= start
let x8 = 100;
    x8 |= 6;

function sOr(){
    document.getElementById('s8').innerHTML="The Value is:"+ x8;
}
// ^= start
let x9 = 100;
    x9 ^= 6;

function sX0r(){
    document.getElementById('s9').innerHTML="The Value is:"+ x9;
}

// && start
let x10 = 100;
    x10 &&= 6;

function sLAnd(){
    document.getElementById('s10').innerHTML="The Value is:"+" "+ x10;
}
// ||= start
let x11 = 100;
    x11 ||= 6;

function sLOr(){
    document.getElementById('s11').innerHTML="The Value is:"+" "+ x11;
}
 // LOGICAL Value end
// Sequence result start
let x12 = "Volvo"+16+4;

function sSequence(){
    document.getElementById('s12').innerHTML="The Value is:"+" "+ x12;
}
let x13 = 16+4+"Volvo";

function sSequence(){
    document.getElementById('s13').innerHTML="The Value is:"+" "+ x13;
}
// Sequence result end
// Objects start 
 const person = {};

        // Add properties
person.firstName = "Mahathir";
person.lastName = "Mohammad";
person.age = 21;
person.eyeColor = "Black"; 

function sObjects(){
    document.getElementById('s14').innerHTML=person.firstName + " is " + person.age + " years old.";
}
function sObjects1(){
    document.getElementById('s15').innerHTML=person.firstName + " eyecolour is" + " "+ person.eyeColor;
}
// Objects end
// window .alert start
function sWindow(){
   window.alert(5+6);
}
// window .alert end

// array start
const cars = ["Volvo","BMW","M-Benz"];
function sArray(){
    document.getElementById('s16').innerHTML= cars;
}
// array end

// Boolean start
function sBoolean1(){
    document.getElementById('s17').innerHTML= Boolean(10>8);
}

// Boolean start
function sBoolean2(){
    document.getElementById('s18').innerHTML= "(-20) is "+ Boolean(-20) ;

}
// Boolean end
// if else start
function sEf() {
    if (new Date().getHours() < 18) {
        document.getElementById("s19").innerHTML = "Good day!";
    }
}

// if else start
const hour = new Date().getHours(); 

if (hour < 18) {
  greeting = "Good day!";
} else {
  greeting = "Good evening!";
}
function sEfElse() {  
        document.getElementById("s20").innerHTML = greeting;
    }

// if else end
// Js string start
    let text20 = "A";
    let text21 = "D";
    let result21 = text20> text21;

function sString() {  
        document.getElementById("s21").innerHTML = result21;
    }

// Js string end
// swith start
let text;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is monday";
    break;
  default:
    text = "Looking forward to the monday";
}

function sSwitch() {  
        document.getElementById("s22").innerHTML = text;
}

// swith end
// Loop for start
let text23 = "";

for (let i = 0; i < 10; i +=2) {
  text23 += "<br>The number is " + i;
}
function sForL() {  
        document.getElementById("s23").innerHTML =text23;
}

// Loop for end