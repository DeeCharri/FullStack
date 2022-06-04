//string to Array
/*
let string=prompt("enter a string")
let array=string.split("")
let array1=[...string]
console.log(typeof(string))
console.log(typeof(array))

console.log("using split()",array)
console.log("using spread operator [...] ",array1)

//check the data type for the below vars
let abc
let ghi = new Array(3)
let jkl = {}
let lmn = ""
let opq = 0
let rst = false
let def = null	

console.log("abc",typeof(abc))
console.log("ghi",typeof(ghi))
console.log("jkl",typeof(jkl))
console.log("lmn",typeof(lmn))
console.log("opq",typeof(opq))
console.log("rst",typeof(rst))
console.log("def",typeof(def)) 
/*
//Remove Duplicates

let a=[1,2,3,3,2,4,5,3,4,4,5,6,7,6,6,7,8,9]
//using set
let remove_duplicate=new Set(a)
console.log(remove_duplicate)
//without using set
let remove_duplicates=[]
output=a.filter((element,index)=> a.indexOf(element)==index)
remove_duplicates=output
console.log("without set",remove_duplicates)



//Reverse a string in JS

let name="deepa"
//1st convert it to array as we can't able to reverse the strin in array
let name_array=name.split("")
//reverse the array using revers()
let revers_array=name_array.reverse();
let string_revrse=revers_array.join("")

console.log(string_revrse)

//Palindrome  aba if we reverse it we should get same only i,e called palindrome

function palindrome(element)
{
if(typeof(element) == "number")
{
	element=element.toString()
	console.log(typeof(element))
}
let reversed_element;
let convert_array = element.split("")
let revers_array = convert_array.reverse()
reversed_element = revers_array.join("")
	
//console.log(element,reversed_element)
if(element == reversed_element)
{
	console.log(element," is palindrome")
}
else
{
		console.log(element," is not palindrome")

}
}
palindrome("aba")
palindrome(121)
palindrome(123)

//Search without using builtin method

let students=["Deepa","Swati","sneha","kaveri","shruti"]
let index=0;
let search_element=prompt(`enter a element which we want to search of given array ${students}`)
for(let i=0; i <= students.length; i++)
{
	if(students[i] == search_element)
	{
		index=i
		console.log("we found the element and the position is",index)
		break;
	}
	else
	{
				console.log("not found the element")

	}
}


//Palindrome without using builtin functions

function palindrome_without_builtin(element)
{
if(typeof(element) == "number")
{
	element=element.toString
}
for (let i=0 ; i < element.length/2 ; i++)
{
	if(element[i] !== element[element.length -1 -i])
	{
		return "not a palindrome"
		
	}
	else
	{
		return "palindrome"
		
	}
}

}

console.log(palindrome_without_builtin(121))
console.log(palindrome_without_builtin("121"))
console.log(palindrome_without_builtin("abc"))
console.log(palindrome_without_builtin("aba"))
console.log(palindrome_without_builtin("abba")) 

//Sort an array without using builtin functions	

function sort()
{
let a=[1,4,3,6,7,2,5]

var flag=false
while(!flag)
{
flag=true
	for(let i=1 ; i < a.length ; i++)
	{
		if(a[i-1] > a[i])
		{
			flag=false;
			let temp=a[i-1]
			a[i-1] = a[i]
			a[i] = temp
		}
		
	}

}
return a
}
console.log(sort())

//explain pass by value and ref with an example

function pass_by_value(name)
{
	let my_name=name; // it does create a copy of value , means we created 2 memory address for the same value
	return my_name
}

function pass_by_ref(students)
{
	students.push("swati") // it doesn't create a copy of value. here we are adding the element to existed memory
	return students
}
let students=["Deepa","gagan"]
let name="Mahesh"
console.log(pass_by_value(name))
console.log(pass_by_ref(students)) 

//Count the frequency in an array

let array=['a','b','c','d','d','a','a','b','d','d']

let frequency={}

for (let element of array)
{
	if(frequency[element])
	{
		frequency[element]+=1
	}
	else {
		frequency[element]=1
	}
	
}
console.log(frequency)
*/
//Anagram

//function anagram(students)
//{
//let output=[];
//for(let i=0;i< students.length;i++)
//{
//	let word=students[i].split("").sort().join("");
//	!output.hasOwnProperty(word)?output[word]=[]:null
//	output[word].push(students[i])
//}
//return output
//}
//
//let students = ["dee","swa","shweta","sahana"]
//
//console.log(anagram(students))

//console.log(students)

//chaes board
//
//var table=document.createElement('table')
//for(let i=0 ;i< 9;i++)
//{
//	var tr=document.createElement('tr')
//	for (let j=0;j<9;j++)
//	{
//		var td=document.createElement('td')
//		if(i%2 == j%2)
//		{
//			td.style.backgroundColor="black";
//			td.style.width="100px"
//			td.style.height="100px"
//			
//			
//		}else
//		{
//			td.style.backgroundColor="white"
//			td.style.width="100px"
//			td.style.height="100px"
//		}
//	}
//	tr.appendChild(td)
//}
//table.appendChild(tr)
//table.style.border="2px solid black"
//table= document.getElementById('table')
//table.appendChild(table)
/*
 var table=document.createElement('table')
 for (let i=0;i < 9;i++)
 {
	 var tr=document.createElement('tr')
	 for(let j=0;j<9;j++)
	 {
		 var td=document.createElement('td');
		 if(i%2==j%2)
		 {
			 td.style.backgroundColor="white"
			 td.style.width="100px"
			 td.style.height="100px"
			 
			 
		 }else{
			 td.style.backgroundColor="black"
			 td.style.width="100px"
			 td.style.height="100px"
		 } 
		 tr.appendChild(td)
	 }
	table.appendChild(tr) 
 }
 
 table.style.border="1px solid black"
 table.style.margin="auto"
 
 con=document.getElementById('container')
 con.appendChild(table)
 
 //we should have to add defer in script tag while importing js file if we use appendChild() 
 
 var div1=document.createElement('div')
 var div2=document.createElement('div')
 
 div1.style.width="200px"
 div1.style.height="200px"
 div1.style.border="2px solid black"
 div1.style.display="inline-block"
 div1.style.margin="1px"
 div1.innerHTML="Hi I am Good"
 

 div2.style.width="200px"
 div2.style.height="200px"
 div2.style.border="2px solid blue"
 div2.style.display="inline-block"
 
 container1=document.getElementById('container1')
 container1.appendChild(div1)
 container1.appendChild(div2)
 
 function armstrong(num)
 {
	 let sum=0;
	 let rem;
	 let length1=(num.toString()).length
	 let temp=num
	 while(temp > 0)
	 {
		 
		  rem=(temp%10)
		  temp=Math.floor(temp/10)
		  sum+=rem ** length1
	 }
	 
	 console.log(sum)
 }
 
 armstrong(407)
 

 function anagram(string)
 {
	 let anagram=[]
	 anagram.push(string)
	 let word=string.split("").sort().join("")
	 
	 anagram.push(word)
console.log(anagram)
 }
 anagram("deepa")
 
 function anagram(array_ele)
 {
	 let output=[]
	 for(i of array_ele)
	 {
		 let word=i.split("").sort().join("")
		 output.push(word)
	 }
console.log(output)
 }
 
 let array_ele=["dee","swa","gagan"]
 anagram(array_ele)
 
 //count the frequency
 let a=[1,2,3,3,4,2,3,4,5]
 
 let frequency={}
 
 for (i of a)
 {
	 if(frequency[i])
	 {
		 frequency[i]+=1
	 }
	 else{
		 frequency[i]=1
	 }
 }
 
 console.log(frequency)
 
 
 //
 
 //new keyword
 let students=new Object();
 students.name="Deepa"
 students["age"]=24
 
 console.log(students)
 
 
 //console.log(students_name)
 
 //prototype
 const F = function () {
   this.a = 1;
   this.b = 2;
};
 let students_copy = new F();
 
 console.log(students_copy)
 
 let x=1
 switch(x){
	 case 0:{let a;
	 break;}
	  case 0:{let a;
	  break;}
			 
 }
 //var message;
console.log(message);
message = "The variable Has been hoisted";*/

//String to Array
/*
let a="deepa"
let array_1=a.split("")
let array_2=[...a]

document.getElementById("c").innerHTML="using split() "+array_1
document.getElementById("c1").innerHTML="using spread operator "+array_2

let abc
let ghi = new Array(3)
let jkl = {}
let lmn = ""
let opq = 0
let rst = false
let def = null				//***********IMP************


console.log("types ===> ",abc, def)
console.log(abc == def)
console.log("type of abc => ", typeof(abc))
console.log("type of def => ", typeof(def))
console.log("type of ghi => ", typeof(ghi))
console.log("type of jkl => ", typeof(jkl))
console.log("type of lmn => ", typeof(lmn))
console.log("type of opq => ", typeof(opq))
console.log("type of rst => ", typeof(rst))

//Remove Duplicates

let a=[1,2,3,4,4,5,3,6,6,7]

let unique=a.filter((element,index)=>a.indexOf(element) == index)
let uniques=new Set(a)

console.log("without set",unique)
console.log("with set",uniques)

const object1 = {
  a: 'somestring',
  b: 42
};

console.log(Object.entries(object1))

function greatest_num(a,b,c,d)
{
	if(a>b && a>c && a>d)
	{
	   console.log(`${a} is greatest in ${Object.values(arguments)}`)	
	}else if(b>c && b > d )
	{
		console.log(`${b} is greatest in ${Object.values(arguments)}`)
	}
	else if(c>d)
	{
		console.log(`${c} is greatest in ${Object.values(arguments)}`)
	}
	else{
       console.log(`${d} is greatest in ${Object.values(arguments)}`)
	}
}

 greatest_num(1,201,4,90)
 greatest_num(1000,201,4,90)
 greatest_num(1,20,400,90)
 greatest_num(1,201,4,900)*/