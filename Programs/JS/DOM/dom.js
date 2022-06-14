/*
DOM  - Document Object Model

document means html page 

object means HTML elements , 

creating an element we have => document.createElement('tagname')

once we created, we have to append it to html page/document.  using appendChild*() method


let div1 = document.createElement('div')

// appending div tag to body
document.body.appendChild(div1)

//adding content to div element
div1.innerHTML = "I have added a div under Body element , using DOM Document Object Model"

//adding attributes using className,title,id and uisng setAttribute also we can add the attributes to element.

div1.className = "div1"
div1.title = "division"
div1.id = "div01"
div1.setAttribute('checked',true)

// add  p element under div tag using id "div01"

let p = document.createElement('p')

document.body.appendChild(p)

p.innerHTML = "Hi I am good"

// add id to p element

p.setAttribute('id','paragraph')

p.style.fontSize="45px"

p.style.color="blue"

p.setAttribute("width","400px")
p.setAttribute("height","400px")
p.style.backgroundColor="lightpink"
p.style.border="2px solid black"

//remove childElement

document.body.removeChild(p)

// get element by id => single element

document.getElementById("division1").innerHTML = "The getElementById Method"

//get elements by className  => html collections

console.log("\n get elements by className")

elementss = document.getElementsByClassName('green')

console.log(elementss)

// get elements by tag name  => html collections
console.log("\n get elements by TagName")

tags = document.getElementsByTagName('div')

console.log(tags)

/*get elements by query selector 
   single element -> document.querySelector
   multi elements -> document.querySelectorAll  ==> nodelist

console.log("\n get elements by query selector ==> single element  \n")
selector =  document.querySelector('#division1')

console.log(selector)

console.log("\n get elements by query selector ==> multiple  elements  \n")
selectors = document.querySelectorAll(".green")

console.log(selectors)


for(let e in elementss)
{
	
	elementss[e].classList.add("class1","class2")
	
	elementss[e].classList.remove("class1")
	
	elementss[e].setAttribute("title","India")
	
	elementss[e].innerHTML=e+" : "+"The easiest way to get the content of an element is by using the innerHTML property."
	
	elementss[e].style.backgroundColor="lightpink"
	
	elementss[e].style.border="2px solid black"
	
	elementss[e].style.width="500px"
	
	elementss[e].style.height="100px"	
	
	elementss[e].style.color="blue"
	
	elementss[e].style.fontSize = "25px"
	
	elementss[e].innerText = "Hi Deepa"
	
	elementss[e].textContent = "Hi Swati"
	
	elementss[e].style.textAlign = "center"
	
	
	//elementss[e].style.display="none"
}

*/ 

// node list
/*
let container = document.getElementById('container')

console.log("container",container)

container.setAttribute("class","container-fluid")

container.title="Main Div"

container.classList.add("bg-secondary","border-2","p-5")

//container.innerText="Document Object Model"

//container.style.fontSize="30px"

let h1 = document.createElement('h1')

h1.innerText = "Document Object Model"

container.appendChild(h1)

h1.style.color="white"

h1.style.textAlign="center"

//container.removeChild(h1)

let nodes= document.querySelectorAll('.green') // here i am taking tag name , it's taking container main division so let me take only child of container

console.log(nodes)

// we removed child elements of container 
console.removeChild(nodes)

// add paragrap tag under container
let p = document.createElement('p')
p.textContent=`The most common way to access an HTML element is to use the id of the element.

In the example above the getElementById method used id="demo" to find the element.`
let i= 0
/*for(let n of nodes)
{
	i=i+1
	n.classList.add("bg-primary","w-100","h-25","border","m-3","rounded-2","fs-4","fw-bold","text-center","text-danger","pt-2")
	
	n.innerHTML=" Hi Div " + i
	
	//n.style.fontSize="20px"
	
	//n.style.color = "white"
} 
 */
//hid button
function hide()
{
	document.getElementById("button").style.display="none"
}


/*
// fibonacii

function fibonacci(nterm)
{
	let n1=0,n2=1
	for(let i=0;i<nterm;i++)
	{
		let n3=n1+n2;
		console.log(n1)
		n1=n2;
		n2=n3
	}
	
}

fibonacci(5) 

//destructing of array

console.log("\n destructing of array \n")
let array=['a','b','d']

let [x,y,z]=array

console.log("x => ",x)
console.log("y => ",y)
console.log("z => ",z)

//destructing of Object
console.log("\n destructing of object \n")

let objectt = {Name:"Deepa",Age:24}

let {Name,Age} = objectt

console.log("Name =>",Name)
console.log("Age =>",Age)

//class

class student{
	
	constructor(name,age,sub)
	{
		this.name=name
		this.age=age
		this.sub=sub
	}
	
	student_details()
	{
		console.log(`${this.name}  , ${this.age} , ${this.sub}`)
	}
	
	static Result (name,result)
	{
		console.log(`${name} : ${result}`)
	}
}
//creating an object using class student
let s1 = new student("Deepa",24,"JS")

//calling method from object 
s1.student_details()

//calling method from class
student.Result("Deepa","Pass")


console.log("age :",s1.age)  

*/


function square(a)
{
	return (a**2)
}

function main(a,square)
{
	return square(a)
}

console.log(main(2,square))