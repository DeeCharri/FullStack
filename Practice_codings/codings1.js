//String to Array
/*
function string_array(str)
{
	let array = str.split("")
	let array_seconda_way=[...str]
	
	return [array,array_seconda_way]
}

let string=prompt("enter a string")

console.log(string_array(string))

//Check the ouput

function data_type(element)
{
	let datatype=typeof(element)
	
	return datatype;
}
let abc
let ghi = new Array(3)
let jkl = {}
let lmn = ""
let opq = 0
let rst = false
let def = null
let xyz = []
let pqr=data_type

console.log("abc data type is "+data_type(abc))
console.log("ghi data type is "+data_type(ghi))
console.log("jkl data type is "+data_type(jkl))
console.log("lmn data type is "+data_type(lmn))
console.log("opq data type is "+data_type(opq))
console.log("rst data type is "+data_type(rst))
console.log("def data type is "+data_type(def))
console.log("xyz data type is "+data_type(xyz))
console.log("pqr data type is "+data_type(pqr))


function true_false(element)
{
	let result=Boolean(element)
	
	return result
}
function data_type()
{
	
	
	return 1;
}
let a
let b = new Array(3)
let c = {}
let d = ""
let e = 0
let f = false
let g = null
let h = []
let i=data_type
let j=true
let k=-0
let m=-1
//let l=NAN

console.log("unndefined bool value is "+true_false(a))
console.log("array bool value is "+true_false(b))
console.log("empty object bool value is "+true_false(c))
console.log("empty string bool value is "+true_false(d))
console.log("0 bool value is "+true_false(e))
console.log("false bool value is "+true_false(f))
console.log("null bool value is "+true_false(g))
console.log("empty array bool value is "+true_false(h))
console.log("function data_type bool value is "+true_false(i))
console.log("true bool value is "+true_false(j))
console.log("-0 bool value is "+true_false(k))
console.log("-1 bool value is "+true_false(m))
//console.log("l bool value is "+true_false(l))
  

//Remove Duplicates  
let array=['a','b','c','a','e','f','g','h','b','c','a','f','g','h'] 
//using set

let unique_array=new Set(array)
console.log("removed duplicate elements using set() ",unique_array)

//without using set

let unique=array.filter((value,index) => array.indexOf(value) == index)

console.log("removed duplicate elements without using set() ",unique)    

//Reverse a string in JS

let string="abcdefghijk"
//using reverse method
//convert it to array and do reverse

let array=string.split("")
//reverse the array using reverse method
let reverse_array=array.reverse()
//convert array to string using join()
//let reverse_string=reverse_array.join("")
let reverse_string= string.split("").reverse().join("")

console.log("reversed string is ",reverse_string)

//without reverse method
let string1="abcdefghijk"
let reverse__string=[]
let array1=string1.split("")
for(let i=array1.length-1;i >=0 ; i--)
{
	reverse__string+=array1[i] //appending so string type of reverse__string should be string only we are conacating
}
console.log(typeof(reverse__string))
console.log("reversed string is without using reverse() ",reverse__string)

//



//Palindrome
//using bultin functions
console.log("using bultin functions")
let string="1213"
let res=string.split("").reverse().join("")
if(res == string)
	{
		console.log(string+" is palindrome")
	}else{
				console.log(string+" is not palindrome")
	}

//without builtin func
console.log("witohut using bultin functions")

function Palindrome(element)
{
	if(typeof(element) == "number")
	{
		element=element.toString()
	}
	
	let str_arr= element.split("")
	let string=""
	for (let i=str_arr.length-1;i>=0;i--)
	{
		 string+=str_arr[i]
	}
	if(string == element)
	{
		console.log(element+" is palindrome")
	}else{
				console.log(element+" is not palindrome")
	}
}
Palindrome("121")
Palindrome("123")
Palindrome("abba")
Palindrome("aab")


//Search a element without using builtin method

function search(dataset,element)
{
	let search=false
	for(let i=0;i<dataset.length;i++)
	{
		if(dataset[i] == dataset[element] )
		{
			//console.log(element," found in dataset")
			//break;
			search=true
		}
		
	}
if(search)
{
	console.log(element," found in dataset")
}
else{
	console.log(element," not found in dataset")
}
}
let a=[1,2,3,4,5,6,7,8,9]

search(a,4)
search(a,"m")
*/

/*--------------------------------------------------------------------------------
						Sort an array without using builtin functions	
--------------------------------------------------------------------------------

//let array=[1,3,6,2,4,9,8,7,5]    
let array=['b','c','d','E','m','z']    

function sort(array)
{

	let done=false
	while(!done)
	{
		done=true;
		for(let i=0;i<array.length;i++)
		{
			if(array[i] > array[i+1])
			{
				done=false;
				let temp=array[i]
				array[i]=array[i+1]
				array[i+1]=temp;
				
			}
		}
	}
return array
}

console.log("sort array "+sort(array))


//Pass by value and Pass by reference

function pass_by_value()
{
	let x=10;
	let y=x
	
	return [x,y]
}	

console.log("pass_by_value=> created 2 memories for the same value",pass_by_value())

function pass_by_Ref()
{
	let a=[1,2,3,4,5] 
	a.push(10) 
	
	return a
}

console.log("pass_by_reference=> doesn't copy ",pass_by_Ref())
*/

/*--------------------------------------------------------------------------------
						Count the frequency in an array	
--------------------------------------------------------------------------------
let ab=[1,2,3,4,3,4,5,2,3,4,5,6,7,8,9,4,5,8,9,7,8,4,4,5,3,9]

function frequency_count(ab)
{
let frequency={}

ab.forEach((x) => frequency[x]=(frequency[x] || 0)+1)

return frequency
}

console.log(frequency_count(ab))


//count number of occrunce in array

function count_occurance(array,value)
{
	count=0
	for(let element of array)
	{
		if(element == value)
		{
			count+=1
		}
	}
return count;
}

//console.log("no of occurabce 9 is => ",count_occurance(ab,9))
//console.log("no of occurabce 3 is => ",count_occurance(ab,3))
//console.log("no of occurabce 4 is => ",count_occurance(ab,4))

let ab_set=new Set(ab)
for (let i of ab_set)
{
	console.log("no of occurabce"+i+" is =>"+count_occurance(ab,i))
    
}

//anagram -> one single word we can make mre words ex abc -> cba
//taking a string 
function anagram(string)
{
	let words=[];
	words.push(string)
	let word1=string.split("").sort().join("")
	words.push(word1)
    let word2=string.split("").reverse().join("")
    words.push(word2)
return words
}

let string=prompt("enter a string")

console.log(string," anagram is ",anagram(string))

//array

let array=['okmno', 'okmn', 'omkn', 'dell', 'ledl', 'elld', 'ko']
let occrunce=[]
for(let val of array)
{
	
	val1=val.split("").sort().join("")
	occrunce.push(val);
	occrunce.push(val1);
}

console.log(occrunce) 

//Armstrong number digit Number

function armstrong(num)
{
      let length_num = (num.toString()).length
	  let temp=num;
	  let sum=0
	  while(temp > 0)
	  {
		  let rem= temp % 10;
		  temp= Math.floor(temp/10)
		  sum=sum+(rem**length_num)
	  }
     if(sum == num)
	 {
		 console.log(num," is armstrong ")
	 }
	 else{
		 console.log(num," is not armstrong ")
	 }
}
let number=parseInt(prompt("enter a number"))
armstrong(number) 

//Chess board Layout

var table = document.createElement('table')

for(let i=0 ; i < 9 ;i++)
{
	var tr = document.createElement('tr')
	for(let j=0 ; j < 9 ; j++)
	{
		var td=document.createElement('td')
		if(i%2 == j%2)
		{
			td.style.backgroundColor="white"
			td.style.width="100px"
			td.style.height="100px"
			td.innerHTML="eve"
			td.style.textAlign="center"
		}
		else{
			td.style.backgroundColor="black"
			td.style.width="100px"
			td.style.height="100px"
			td.innerHTML="odd"
			td.style.color="pink"
			td.style.textAlign="center"
		}
		tr.appendChild(td)
	}
	table.appendChild(tr)
}

table.style.border="2px solid blue"
table.style.margin="auto"

cont=document.getElementById('container')

cont.appendChild(table)



var main_div = document.createElement('div')
main_div.style.width="500px"
main_div.style.height="500px"
main_div.style.border="2px solid black"
main_div.style.backgroundColor="lightpink"
main_div.innerHTML="Hi I am main Divison"
main_div.style.color="black"
main_div.style.fontFamily="arial"
main_div.style.fontSize="25px"
cont=document.getElementById('container')
cont.appendChild(main_div) 

let x = 'hi' + 'hello'
let y = undefined + "string"

console.log(y)
console.log(typeof(y))

//convert numeric numembers , bools and numm into number using Number()

let a='100'
let b=true
let c=null
let d={}
console.log(Number(a))
console.log(Number(b))
console.log(Number(c))
console.log(Number(d))


//convert to string we use String() or toString() method

let m = null
let n= undefined

console.log("using toString() =>",toString(m))
console.log("using toString() =>",toString(n))
console.log("using String() =>",String(m))
console.log("using String() =>",String(n))



console.log("using String() =>",String([ ]))
console.log("using String() =>",String({}))



function factorial(x)
{
	if(x === 0)
	{
		return 1
	}else{
		
		return x * factorial(x-1)
	}
}

let num=parseInt(prompt("enter a number"))

if(num > 0)
{
	result=factorial(num)
	console.log(num ," factorial is ",result)
}else
{
		alert("please enter a greater than 0 number")
}


//Object Constructor --> constructor is a function which is used to create a objects
//using constructor , we can create nore than one objects

function person()
{
	this.Fname="Veerendra"
	this.age=27
	this.Occupation="Designer"
}

const person1= new person()
console.log("object created from constructor person ",person1)

//using literal we can able to create only one object
//but is we use constructor we can create multiple objects

function Employee(Emp_id,Name,Role,Location,Salary)
{
	this.Emp_id=Emp_id
	this.Name=Name
	this.Role=Role
	this.Location=Location
	this.Salary=Salary
}

const emp1=new Employee("DE40036736","Deepa","Engineer","Banglore",35000)
const emp2=new Employee("SW40036736","Swati","Testing","Banglore",25000)
const emp3=new Employee("VE40036736","Veerendra","Designer","Pune",50000)

console.log("emp1 ",emp1)
console.log("emp2 ",emp2)
console.log("emp3 ",emp3)

//adding properties to emp1 object
emp1.Gender="Female"

//adding method to emp2
emp2.greet=function()
{
	return "hi  "+this.Name + " Good Morning!"
}
//displaying gender property
console.log(emp1.Gender)
console.log(emp2.Gender) // we get op undefined bcz Gender is not there in the emp2

console.log(emp2.greet())
console.log(emp2.greet) //didn't use () so i got body of function0

//Object prototype => this is used to add method and properties to constructor function
//adding property to constructor Employee

Employee.prototype.company="Wipro"

console.log(emp1.company)
console.log(emp2.company)

//adding method

Employee.prototype.Details=function (){
	return "Hi I have submitted all details"
}

console.log("emp1 details => ",emp1.Details())
console.log("emp2 details => ",emp2.Details())


//we can able to chnage the existed prototype

Employee.prototype={company:"My_OWN_Company"}

const emp4=new Employee("NA40036736","Nagaraj","Designer-pro","Delhi",500000)
console.log("company name of emp4 => ",emp4.company)
console.log("company name of emp1 => ",emp1.company)

//prototype chaining

function Fruits()
{
	this.Name="Apple"
}
Fruits.prototype.Name="Mango"
Fruits.prototype.price=1000

const fruit=new Fruits()
// fruit object accessing Name from construtor Fruits bcz prototype chaining 
console.log("fruit object accessing Name from construtor Fruits bcz prototype chaining =>",fruit.Name)  

console.log(fruit.price)

//if we want to get prototype object we use object_name.__proto__ (2 hiphens) 

console.log(fruit.__proto__) // we can get Name as mango 

//JavaScript Program to Check Prime Number

function Prime_check(num)
{
	let is_prime=true;
	if(num === 1)
	{
		alert("1 is not a prime number")
	}
	else if(num > 1)
	{
		for(let i=2;i<num;i++)
		{
			if(num%i == 0)
			{
				is_prime=false;
				break;
			}
		}
	}
    if(is_prime)
	{
		console.log(num," is prime number")
	}
	else{
				console.log(num," not is prime number")

	}
}
let n=parseInt(prompt("enter a number"))
Prime_check(n)


function prime_numbers(num)
{
	let prime_nums=[2]
	if(num === 1)
	{
		alert("1 is not a prime number")
	}
	else if(num > 1){
		for(let i=2;i<num;i++)
		{
			if(i % i == 0 && i%2 !=0)
			{
				prime_nums.push(i)
			}
		}
	}
return prime_nums
}
let num=parseInt(prompt("enter a number"))
console.log("prime numbers are =>",prime_numbers(num)) 

//JavaScript Program to Find the Factorial of a Number

function Multiplication_table(num)
{
let Multiplication_table=[];
	for(let i=1;i<=10;i++)
	{
	     let m = num * i
         Multiplication_table.push(m)		 
	}
return Multiplication_table
}

let n=parseInt(prompt("ebter a number"))

console.log("table of "+n+" is => " +Multiplication_table(n)) 

//JavaScript Program to Print the Fibonacci Sequence

function fibonacci(num)
{
	let n1=0
	let n2=1
	let fibonacci_series=[]
	for(let i=0;i<num;i++)
	{
	   fibonacci_series.push(n1)
	   n3=n1+n2;
	   n1=n2
	   n2=n3
	}
return fibonacci_series
}

let n=parseInt(prompt("enter a number"))

console.log("table of "+n+" is => " +fibonacci(n)) 

//JavaScript Program to Check Armstrong Number

function armstrong(num)
{
	
	let sum=0
	let length_num=(num.toString()).length
	let temp=num
	while(temp > 0)
	{
		
		let rem=(temp % 10) **length_num;
		sum=sum+rem
		temp=Math.floor(temp/10)
	}
if(sum == num)
{
	console.log(num," is armstrong number")
}
else{	
   console.log(num," not is armstrong number")
}
}

let n=parseInt(prompt("enter a number"))

armstrong(n) 

//JavaScript Program to Find Armstrong Number in an Interval

function Armstrong(low,high)
{
	let armstrong_series=[]
	for(let i=low;i <= high;i++)
	{
		let temp=i
		let sum=0
		let length_no=(i.toString()).length
		while(temp > 0)
		{
			let rem=(temp%10) ** length_no
			sum+=rem
			temp=Math.floor(temp/10)
		}
		if(sum == i)
		{
			armstrong_series.push(i)
		}
	}
return armstrong_series
}
let low=parseInt(prompt("enter lower number"))
let high=parseInt(prompt("enter higher number"))
console.log("armstrong series in between "+ low + " & " + high +" are ",Armstrong(low,high))



//Sum of Natural Numbers

function sum_natural(num)
{
	let sum=0;
	for(let i=0;i<=num;i++)
	{
		sum+=i
	}
	console.log("sum of natural numbers ",sum)
}

sum_natural(3) 

//JavaScript Program to Check if the Numbers Have Same Last Digit

function check_last_digit(num_array)
{
	let reminders=[]
	for(let n of num_array)
	{
		n=n.toString()
		let rem=n%10;
		reminders.push(rem)
	}
	let remove_duplicate=new Set(reminders)
	//console.log(reminders)
	if(remove_duplicate.size == 1)
	{
		console.log(num_array," have the same last digit")
	}
	else{
				console.log(num_array," not have the same last digit")

	}
}
let num_array=[121,131,142,151,211,12341]
check_last_digit(num_array) 

let a=[1,2,3,4]
let b= new Set(a)
console.log(b.entries())


//JavaScript Program to Find Sum of Natural Numbers Using Recursion

function Natural_sum(num)
{
	if(num > 0)
	{
        	
		return num + Natural_sum(num-1)
	}
	else{
		return num
	}
}

let num=parseInt(prompt("enter a number"))
let sum=Natural_sum(num)
console.log(sum," sum of Natural numbers")



//JavaScript Program to Shuffle Deck of Cards
// we have 4 suits [spades,hearts,clubs,dimonds] ,  in each set we have 12 cards

let suits=['spades','hearts','clubs','dimonds']
let values=
['A','1','2','3','4','5','6','7','8','9','Jocker','Queen','King']

//let create a empty array to have all cards

let deck=[]
for(let i=0;i<suits.length;i++)
{
	for(j=0;j<values.length;j++)
	{
		let cards={Suits:suits[i],Values:values[j]}
		deck.push(cards)
	}
}

//console.log(Math.random()*51)
console.log("before shuffeling")
for (let i=0;i<5;i++)
{
	console.log(deck[i])
}
//Shuffle Deck of Cards

for(let s=deck.length -1;s > 0;s--) //coming from last
{
	let p=Math.floor(Math.random() * s)  //getting a random position between 0 to 51 // floor function is used to rounds the numebr to the nearest integer 
	let temp=deck[s]
	deck[s]=deck[p]
	deck[p]=temp
}
	
//i am displaying only 5 cards
console.log("after shuffeling")

for (let i=0;i<5;i++)
{
	console.log(deck[i])
}

//JavaScript Program to Display Fibonacci Sequence Using Recursion

function fibonacci(num)
{
	if ( num < 2)
	{
		return num
	}else
	{
		return fibonacci(num-1)+fibonacci(num-2)
	}
}

for(let i=0;i<5;i++)
{
	console.log(fibonacci(i))
}

function fibonacci(num,n1=0,n2=1)
{
	
	
	if ( num == 0)
	{
		return num
	}else
	{
		let n3=n1+n2
		console.log(n1)
		n1=n2;
		n2=n3;
		return fibonacci(num-1,n1,n2)
	}

}
let n=parseInt(prompt("enter a number"))
if(n > 0)
{
     fibonacci(n)
}
//JavaScript Program to Find Factorial of Number Using Recursion

function Factorial(num)
{
	if(num == 0)
	{
		return 1
	}
	else{
		return num * Factorial(num-1)
	}
}

let num=parseInt(prompt("enter a number"))

if(num > 0)
{
	let factorial_no=Factorial(num)
	console.log(factorial_no)
}
//JavaScript Program to Check Whether a String is Palindrome or Not

function palindrome(string)
{
	let str=string.split("").reverse().join("")
	if(string == str)
	{
		console.log("string is palindrome")
	}else{		
	console.log("string is not palindrome")} 
		or
	let arr=string.split("")
	let rev_str=[]
	for(let i=arr.length-1;i>=0;i--)
	{
		rev_str+=arr[i]
	}
	if(string == rev_str)
	{
		console.log("string is palindrome")
	}else{		
	console.log("string is not palindrome")}

}

palindrome("aba")
palindrome("abc")
palindrome("abba") 

//JavaScript Program to Sort Words in Alphabetical Order

function sort(array)
{
  console.log(array.sort())
}

let str=prompt("enter more than one words each word seperate by comma")
let array
if(str.includes(','))
{
   array=str.split(",")
}else
{
   array=str.split(" ")
}

sort(array)

/*console.log(arr)
console.log(typeof(arr))

console.log(typeof(array))
console.log(array.length)

//JavaScript Program to Replace Characters of a String

function replace(string,old_word,new_word)
{	
	let new_string=string.replace(old_word,new_word)
	console.log(new_string)
}

let string=prompt("Enter a sentence")

let old_word=prompt(`enter a word which you want to replce from this line => ${string}`)

let new_word=prompt(`enter a new word which you want to replace with "${old_word}" word `)


replace(string,old_word,new_word) 


//JavaScript Program to Create Objects in Different Ways
console.log("using literals")

let person1={
	Name:"Deepa",
	Age:24,
	Skilss: ['c','c++','JS'],
	greet:function(){
		return "Hi "+this.Name+" Good Evening"
	}
}

console.log(person1)

console.log("using new keyword")
let students=new Object()
students.Name=['Sahana','Soumya','Shruti']
students.cls="B-DIV"
students['Marks']=600

console.log(students)


console.log("using  function constructor")
function person(name,age)
{
	this.name=name;
	this.age=age
}

let person2=new person("Deepa",24)
let person3=new person("Swati",25)
let person4=new person("Gagan",28)


console.log(person2)
console.log(person3)
console.log(person4)


let a="deepa"
let b="T"
let c=[...a,...b]

console.log(c)


//JavaScript Program to Check the Number of Occurrences of a Character in the String

function occrunce(string,letter)
{
	var count=0
	for(let i=0;i<array.length;i++)
	{
		if(array.charAt(i) == letter)
		{
			count+=1
		}
	}
return count
}

let string="Deepa"

console.log("occurance of e",occrunce(array,'e')) 

//JavaScript Program to Convert the First Letter of a String into UpperCase

function UpperCase(string)
{
	let text=string[0]
	let toupper=text.toUpperCase()
	string=string.replace(text,toupper)
	
return string
}

let str=prompt("enter a string")
console.log("1st letter converted to upper case",UpperCase(str)) 

//JavaScript Program to Count the Number of Vowels in a String

function vowels(string)
{
	let vowels_ar=['a','e','i','o','u']
	let count=0
	for(let i=0;i<string.length;i++)
	{
		if(vowels_ar.includes(string[i]))
		{
			count+=1
		}
	}
return count
}

let str=prompt("enter a string")
console.log("number of vowels ",vowels(str)) 

//JavaScript Program to Check Whether a String Starts and Ends With Certain Characters

function start_end(string)
{
	if(string[0] == string[string.length-1])
	{
		console.log("string starts with and ends with same character")
	}
	else{
		console.log("string not starts with and ends with same character")
	}
}

start_end("dee") */

//JavaScript Program to Check if a Key Exists in an Object

let x={
	Name:"Deepa",
	CLass:"PUC"
}

if(x.hasOwnProperty("age"))
{
	console.log("true")
}
else{console.log("false")}



