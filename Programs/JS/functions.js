function add(x,y,z)
{
	z=x+y
	return z;
}
let sum=add(100,200)
console.log(sum)
let html=`<br><div>`
html+=`The sum of add(100,200):  `+sum+`</div>`

function Hello(name,msg)
{
      let display=`Hi ${name} , ${msg},How are You?`
	  return display;
}

console.log(Hello("Deepa","Good Evening"));
let greetings = Hello("Swati","Good Evening");

function student_names()
{
	let names=`<ul>`
	for (i in arguments)
	{
	     names+=`<li> ${arguments[i]} </li>`	
	}
     names+=`</ul>`
	 
	 return names
}

let final1=student_names("Deepa","Swati","Sahana","Snehal","Deeksha","Deepathi");

//console.log(final1)
function numbers()
{
	
	for (i in arguments)
	{
	  console.log(arguments[i])	
	}
	
}
numbers(1,2,3,4,5,6,7,8,9)


	
