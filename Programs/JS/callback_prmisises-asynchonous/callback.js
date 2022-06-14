//nested block
/*function display()
{
	greet()
	
	
return "hi"
	
}
function greet()
{
	console.log("good morning")
}

function main(display,num)
{
	num=num+1;
	console.log(display(greet))
return num
}

console.log(main(display,1))


function main1(add,a,b)
{
	add(a,b,sub)
	console.log("completed")
return 1
}

function add(a,b)
{
	sub(a,b)
	let sum=a+b
	
console.log("sum  ",sum)
}

function sub(a,b)
{
	let subs=a-b
    console.log("sub ",subs)
}
console.log(main1(add,10,20))

//
console.log("high order function")

function add(n1,n2)
{
	let sum=n1+n2
return sum
}

function high_ordered(add,a,b)
{
	return add(a,b)
}

console.log(high_ordered(add,10,20))

//closure
function outer()
{
	let a=10;
	function msg()
	{
		console.log("Hi i am in outer function")
	}
	function inner()
	{  
		let b=20;
		console.log("a ===>", a) // accessing outer var in inner function 
		msg() // calling outer function in inner function
	}
	inner()
   //console.log("b ===>",b) // accessing inner var in outer function
}

outer()


//hoisting
console.log("hoisting")
x=10;
console.log("x :",x)

//interpreter reads the program  like
//
//let/var/const x;
//x=10
//console.log(x)
//
// in strict mode




             "use strict" //to define the strict mode

let x=10;
console.log("x ==>",x)  


//anonymous function

(function (){
	
	console.log("i am anonyomus function ")
})

//immediately invoked function /self invoked function

(function (){
	
	console.log("i am anonyomus function ")
})();

//expression function

let exp= (function(){
	console.log("hi i am expression function")
})

function display(exp)
{
       exp()
	   console.log("i am named function")
}

display(exp)

//implicit type conversion 

var x=10 //interger
var y="20" //string
var z=x+y 

op  
1020 // string

//

function display()
{
	console.log("Hi I am deepa Toroji")
}

//setTimeout(display,3000) // execute only one time , the functioned called at specified time and it's execute only one time

setInterval(display,3000) // this function will be called continuesly at  every 3 seconds . //at specified time

*/

                   "use strict"
let x=10;
console.log(x);









