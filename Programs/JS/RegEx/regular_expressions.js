//const string=`Regular expressions. are1 useful in a wide variety of text processing tasks, 
//and more generally string processing, where the data need not be 123 textual. 
//Common applications include data validation, 123 data scraping (especially web scraping), data wrangling, simple parsing,
// the production of syntax highlighting systems, 9986576977 deepa@gmail.com and many mnopus@yahooo.com . other tasks.`
// 
// 
// 
///*we have two ways to write regular expressions 
//1. RegExp literls , here we use // and an optional flag [g,i,m,s,u or y]
//let a = /abc/
//
//2. using RegEx()  constructor function
//let b= new RegEx(/1234/)
// 
//Meta characters -> meta characters are characters interpreted by RegExp()
// [].{}|\*$?+^()
//1.[] -> this is used to match any charatcers/digits within the []. or within the given Range
//
//let pattern1=/[0-9]/;
//
//console.log("position [0-9] ",string.search(pattern1))
//
//let pattern2=/[rst]/
//
//console.log("position of [rst] ",string.match(pattern2))
//
//let pattern3=/[@]/;
//
//console.log("position [0-9] ",string.search(pattern3))
//
//let pattern4=/[\s]/;
//
//console.log("position space",string.search(pattern4))
//
//let pattern5=/[.]/;
//
//console.log("position space",string.search(pattern5))
//
//let pattern6=/[.a]/;
//
//console.log("position space",string.search(pattern6))  */
//
//
///*2. period(.) -> it matches any single character/digit 
//
//let p1=new RegExp(/.R/)
//console.log("R ==>",string.match(p1))
//
//let p2=new RegExp(/.n/)
//console.log("R ==>",string.match(p2))
//
///*Uncaught TypeError: String.prototype.matchAll called with a non-global RegExp argument
//    at String.matchAll (<anonymous>)
//    at regular_expressions.js:50:2
//
//let p3=/.R/
//console.log(string.replace(p3,'IRR'))
//
//str="D eepeeeeee a 123"
//let p4=/......a/
//
//let m = str.search(p4)
//console.log(str.charAt(m))
//
//let str1="deepa@gmail.com"
//let p5=/..@/
//
//console.log(str1.search(p5)) */
//
//
////
//
///*3. carat(^)  => this is used to check wheather the given string starts with speciffied character or not 
//
//let p1=/^R/
//
//let c1= string.search(p1)
//
//console.log(string.charAt(c1))
//
//console.log(p1.test(string))
//
//// pattern.test(given string)
//
//
//let p2=/^r/ //in a given string there is no word which has started with r so we got false result
//console.log(p2.test(string)) */ 
//
//
///* 4. $ -> this indicates last character . it checks wheather the given string is ends with specified character or not 
//
//str="formula Regularsm expressionsz"
//let p1 = /m$/    // it starts searching from 0th index , if we have more than one speficifed characer in the egiven string it will consider 1st one only
//console.log(p1.test(str))
//
//let p2 = /z$/
//console.log(p2.test(str)) */
//
//
///* 5. * star -> this is used to match zero or more occurance of pattern left to it 
//
//str="man"
//
//let p1 = /mmm*ain/
//console.log(p1.test(str))
//
//let p2 = /nn*/
///*
//console.log(p2.test(str))
//
//let p3 = /i*n/  // i is not present in the string but still we are getting true bcz * means 0 or more occurance
//console.log(p3.test(str))
//console.log(p3.test(str)) */
//
///*  6.+ --> it matches one or more occurance of speciffied chraacter in a given string
//
//str="mainn"
//
//let p1 = /m+/
//console.log(p1.test(str))
//
//let p2 = /o+/
//
//console.log(p2.test(str))
//
//let p3 = /n+/
//
//console.log(p3.test(str))
//
//let p4 = /[a-m]+/
//
//console.log(p4.test(str)) */
//
///* 7.? It matches 0 or only one occurance of pattern left to it 
//
//str="maiinn abc"
//
//let p1 = /m?/
//console.log(p1.test(str))
//
//let p2 = /o?/
//
//console.log(p2.test(str))
//
//let p3 = /mai?./
//
//console.log(p3.test("deepa"))
//
//let p4 = /[a-m]?/
//
//console.log(p4.test(str)) */
//
//
///*  8.{n,m}  it matches at least n or at most m character of pattern left to it, and it should cross m value 
//
//str="Deepa toroji"
//
//let p1 = /e{2,5}/  // atleast e - 2 or 5 shold be thr in string
//
//console.log("p1",p1.test(str))
//
//let p2 = /a{3,6}/
//
//console.log("p2",p2.test(str))
//
//let p3 = /o{1,2}/
//
//console.log("p3",p3.test(str))
//
//let p4 = /p{1,8}/
//
//console.log("p4",p4.test(str)) */
//
///*  9. | altreation -> it same as or operator 
//
//
//str="Deepa toroji"
//
//let p1 = /e|m/  //  string shold has either e or m
//
//console.log("p1",p1.test(str))
//
//let p2 = /a|z|l/
//
//console.log("p2",p2.test(str))
//
//let p3 = /m|v|n|s/
//
//console.log("p3",p3.test(str))
//
//let p4 = /D|d/
//
//console.log("p4",p4.test(str))
//
//let p5 = /T|d/
//
//console.log("p5",p5.test(str)) */ 
//
///* 10. () paranthesis are used to group the patterns 
//str="Deepa toroji hi I amswati"
//
//let p1 = /(D|e)pa/  //  string shold has either e or m
//
//console.log("p1",p1.test(str))
//
//let p2 = /(.p)a/
//
//console.log("p2",p2.test(str))
//
//let p3 = /([^a-z])oji/
//
//console.log("p3",p3.test(str))
//
//let p4 = /([\s1-9])hi/
//
//console.log("p4",p4.test(str))
//
//let p5 = /[4-9]am/
//
//console.log("p5",p5.test(str))  */
//
///* \ : backslash this is used to escape the various charcters including meta characters also  
//
//let p=/\$a/ // here , $ indicates last position . it checks whether the given string is ends with a or not. 
////as per our string ends with a but we are getting  false bcz we have used \ (backslash). the \ removing the functionality of $ 
//
//console.log(p.test("Deepa")) */
//
//
////================================ special sequence ==========================================================
//
//
///* 1. \A  - this is used to check whether the given string is starts with specicied word/charcters or not
//
//str="In the sun"
//
//let p1 = /(\Athe)\ssun/  
//
//console.log("p1",p1.test("the sun"))
//
//let p2 = /\AIn/
//
//console.log("p2",p2.test(str))
//
//let p3 = /\Adeepa/
//
//console.log("p3",p3.test(str))
//
//let p4 = /\Ahi/
//
//console.log("p4",p4.test(str))
//
//let p5 = /\Atoroji/
//
//console.log("p5",p5.test(str)) */
//
//
///* 1. \b  - this is used to check whether the given string is starts with  specicied charcters or not*/
///* 1. \b  - this is used to check whether the each word of given paragraph is starts with specicied charcters or not
//
//str="In am the sunm"
//
//let p1 = /\bt/  
//
//console.log("p1",p1.test("the sun"))
//
//let p2 = /\ba/
//
//console.log("p2",p2.test(str))
//
//let p3 = /\bI/
//
//console.log("p3",p3.test(str))
//
//let p4 = /\bh/
//
//console.log("p4",p4.test(str))
//
//let p5 = /\bs/
//
//console.log("p5",p5.test(str))  */
//
///* 2. \B  - this is used to check whether the given word is not starts with  specicied charcters or not ,opposite to /b
//
//
//str="In am the sunm"
//
//let p1 = /\Bt/  
//
//console.log("p1",p1.test("the sun"))
//
//let p2 = /\Ba/
//
//console.log("p2",p2.test(str))
//
//let p3 = /\BI/
//
//console.log("p3",p3.test(str))
//
//let p4 = /\Bh/
//
//console.log("p4",p4.test(str))
//
//let p5 = /\Bs/
//
//console.log("p5",p5.test(str))
//
//let p6 = /\Be/
//
//console.log("p6",p6.test("the sun")) */
//
//
///* 2. \d  - this is used to check whether the given string has digits or not [0-9] digits */
//
///* 3. \D this is opposite to /d , it returns false if the word has digits other wiose it returns true
//str="In  the sunm123 998657 dert56786"
//
//let p1 = /\d/  
//
//console.log("p1",p1.test("the sun"))
//
//let p2 = /\d/
//
//console.log("p2",p2.test(str))
//
//let p3 = /\d/
//
//console.log("p3",p3.test("I am Deepa !@#$%^&"))
//
//let p4 = /\D/  // 
//
//console.log("p4",p4.test("the sun"))  // here we don't have digits , /D is used to check non digits
//
//let p5 = /\d/
//
//console.log("p5",p5.test(str))
//
//let p6 = /\D/
//
//console.log("p6",p6.test("the sun")) */ 
//
//
///* 3. \s this matches the white space , true if the given string has space otherwise false
//and /S this is opposite to /s , this matches no wihte space , returns true if the given string has no white spaces
// 
//str="Inthesunm123998657dert56786"
//
//let p1 = /\s/  
//
//console.log("p1",p1.test("the sun"))
//
//let p2 = /\S/
//
//console.log("p2",p2.test(str))
//
//let p3 = /\S/
//
//console.log("p3",p3.test("  "))
//
//let p4 = /\s/  // 
//
//console.log("p4",p4.test("thesun"))   */
//
///* 3. \w this matches alpha numeric characters [both digits and numbers and underscore]==> [a-zA-Z0-p_]
//and /W this is opposite to /w , this doesn't matches alpha numeric characters  ,[^a-zA-z0-9_] it only matches spl characters like @!#%& etc etc
// 
//str="Inthesunm123998657dert56786"
//
//let p1 = /\w/  
//
//console.log("p1",p1.test("the sun"))
//
//let p2 = /\W/
//
//console.log("p2",p2.test("@#$*"))
//
//let p3 = /\W/
//
//console.log("p3",p3.test("  "))
//
//let p4 = /\w/  // 
//
//console.log("p4",p4.test(str))   
//
//let p5 = /\w/  // 
//
//console.log("p5",p5.test("@#$%")) 
//  
//let p6 = /\W/  // 
//
//console.log("p6",p6.test(str))   
//*/
//
///* 3. \Z this matches if speciffied characters are at the end of the string or not 
// 
//str="Hi I am deepa I am learning JavaScript"
//
//let p1 = /sun\Z/  
//
//console.log("p1",p1.test("the sun"))
//
//let p2 = /javascript\Z/
//
//console.log("p2",p2.test(str))
//
//let p3 = /JavaScript\Z/
//
//console.log("p3",p3.test(str))
//
//let p4 = /learning\Z/  
//
//console.log("p4",p4.test(str)) */  
//
///*
//const string1 = 'Find me In JavaScript';
//const string2 = 'Find!me!In!JavaScript';
//const paragrap = "Hi i am Deepa toroji!! and my number is 91-99-86576977"
//
//
//// search 'in' in string variable
//const pattern = /In/
//
//let ind=string1.search(pattern)
//console.log(string1.charAt(ind))
//
//// replace the character which you have searched in above  with another character
//
//console.log(string1.replace(pattern,'into'))
//
//// splitting strings into array elements
//const p=/[\s]/
//console.log(string1.split(p))
//
////string splitted by ! seperator
//const p1=/[\!]/
//console.log(string2.split(p1))
//
//
//// searching the phone number pattern
//
//const num = /(\d{2})-(\d{2})-(\d{8})/g
//
//console.log(num.exec("My number is : 91-99-86576977 "))
//
//const i_check = /\w/g
//console.log(paragrap.match(i_check)) 
//
//const i_check1 = /\d/g
//console.log(paragrap.match(i_check1)) 
//
//const i_check2 = /\W/g
//console.log(paragrap.match(i_check2)) 
//
//*/
//
////===========================   flags ==================================================
///*1. g -> it find all matches
//2. m -> it performs multi line match
//3. i -> it performs case in-sensitve match 
//
//const string1 = 'Hello hello hello';
//
//// replace the hello word without using g flag
//
//console.log(string1.replace(/hello/,'world'))
//
//// replace the word hello using g flag  -> this is shold be case sensitve 
//
//console.log(string1.replace(/hello/g,'world'))
//
//// replace the string hello using i 
//
//console.log(string1.replace(/hello/i,"Deepa"))
//
////replace the string hello with g and i flag
//
//console.log(string1.replace(/hello/gi,"Swati")) 
//
//
//
//// write a program to validate the phone number
//// write a program to validate the email address
//
//
//function email_validation(email)
//{
//	//const reg= /^\S+.@\S+[\.]\S/g
//	const reg= /^(\S)+.@\S+[\.]\S/g
//	
//	let re = reg.test(email)
//	
//	if(re)
//	{
//		console.log(email,"    email address is valid")
//	}
//	else{
//		console.log(email,"   email address not is valid")
//
//	}
//}
//
//email_validation("Deepast1998@gmail.com")
//email_validation("Deepast 1998@gmail.com")
//
//
//
//let a = null
//let x
//let ar=[1,2,3]
//let obj={name:"deepa",age:24}
//console.log(typeof(a))
//console.log(typeof(x))
//console.log(typeof(obj))
//
//
//
//console.log(null == undefined) 
//
////White a function to merge 2 arrays and removing duplicates without using inbuilt function 
//
//let a=[1,2,3,4,3,4,5,6,4,5,6,7,8]
//let b=[11,23,12,1,2,3,4,5,8,9,10,12]
//
//
//
//let a1=a.filter((value,index) => a.indexOf(value) == index)
//let b1=b.filter((value,index) => b.indexOf(value) == index)
//
//let merge_array=[...a1,...b1]
//
//let unique_merged_array= merge_array.filter((val,index)=> merge_array.indexOf(val) ==  index)
//
//console.log("array 1",a1)
//console.log("array 2",b)
//console.log("Merged array ",unique_merged_array)
//*/
//
////White a function on sorting the number in ascending order
//
//let numbers=[9,5,4,1,3,2,0]  // if we define 23 value it will check first didgit then it will come 2nd posiiton after 1 
//
////console.log(numbers.sort())
//////descnding order
////console.log(numbers.sort().reverse())
//
////ascending ==> nums[i] > nums[i+1] for descnding ==> nums[i] < nums[i+1]
//function ascending(nums)
//{
//	let done=false
//	while(!done)
//	{
//		done=true;
//	  for(let i=0;i<nums.length;i++)
//	  {
//	  	if(nums[i] > nums[i+1])
//	  	{
//	  		done = false;
//			let temp=nums[i]
//			nums[i]=nums[i+1]
//			nums[i+1]=temp
//	  	}
//	  }
//	}
//	console.log(nums)
//}
//
//ascending(numbers)
//
//let s="deepa"
//
//s=s.split("")
////let m=[]
//for(let i=s.length-1;i >=0;i--)
//{
//	s.push(s[i])
//}
//console.log(s.join(""))
//
////function to calculate the frequency of occurance of each number are=[1,1,2,3,4,4]
//
//
//let num=[1,1,2,3,4,4]
//
//let frequency={};
//
//for(let e of num)
//{
//	if(frequency[e])
//	{
//	
//		frequency[e]=frequency[e]+1
//	}
//	else{
//		
//		frequency[e]=1
//	}
//}
//
//console.log(frequency)
//
////explination
///*
//frequency[1]=1
//
//{1:1,}
//
//frequency[1]=frequency[1]+1==> 1+1
//frequency[1]=2
//
//{1:2,2:1,3:1,4:2} */
//
//
//let student={
//	
//	Name : "Deepa",
//	Age: 24
//	
//}
//
//let student1={
//	
//	Name : "Deepa",
//	Age: 24
//	
//}
//
//console.log(student == student1)
//console.log(JSON.stringify(student) == JSON.stringify(student1))
//
//for(let key in student)
//{
//	console.log(`${key} : ${student[key]}`)
//}
//
//
//
//let entriessss=Object.entries(student)
//
//console.log(entriessss)
//
//
//entriessss.forEach((val) => console.log(val))
//
//
//entriessss.map((val) => console.log(val+" Hello "))
//
////student.forEach((val) => console.log(val))
//
//
//let a = new Date()
//
//console.log(a)
//
////local storage
//localStorage.setItem('Name','Deepa')
//
//console.log(localStorage.getItem('Name'))
//
//localStorage.removeItem('Name')
//
////session storage
//
//sessionStorage.setItem('Name','Deepa Toroji')
//
//// saving arrays and objects into local storage
//
//let skills=['JS','HTML','CSS','Java']
//
//let skillsJSON= JSON.stringify(skills)
//
//// saving in LS
//
//localStorage.setItem('Skills',skillsJSON)
//
//
//
///*//WAP for sqrt using call back 
//
////without using  sqrt()
//
//let num1=9
//
//let root=Math.pow(num1,0.5)
//
//console.log(root)
//
//
////call back function
//
//function sqrt(numm)
//{
//	let root= Math.pow(numm,0.5)
//	console.log(root)
//}
//
//function main(sqrt,n)
//{
//	console.log("Finding the sqrt of ", n)
//	sqrt(n)
//}
//
//main(sqrt,25)
//
//
//*/
////another way withot using built  in functions
//
//let done=true
//let aaa = new Promise(function (resolve,reject)
//{
//
//if(done)
//{
//	resolve("success")
//}
//else{
//	reject("failed")
//}
//})
//console.log(aaa)
//
//
//// 
//
//let aaaaa;
//
//let b= undefined
//
//console.log(typeof(aaaaa),typeof(b))
//console.log(aaaaa,b)
//
//
//let var1=Symbol('dee')
//let var2=Symbol('dee')
//
//console.log(var1 == var2)
//
//
//let a1=(1,2,3,4)
//console.log(a1)
//
//// in operator is used to check wheather the given property is present or not in given object1
//
////syntax 'property_name' in Object_name
//
//let object1 = {
//	name:"Deepa"
//}
//
//console.log('age' in object1)
//console.log('name' in object1)
//
//
//let ao = new Object()
//
//console.log(ao instanceof Object)
////console.log(ad instanceof Object)
//
//// map is an instance of Object data type
//let map = new Map()
//console.log(map instanceof Object)
//
//// object is not an instance of map
//console.log(ao instanceof Map)
//
//
//let m =10,n=20
//
//m > n ? console.log(m) : console.log(n)
//
//
//let o= [1,2,3,4,5]
//
//delete o[3]
//
//console.log(o)
//
//
//
//let mn = new Map([[1,2],[2,3],[3,4]])
//
//console.log(mn)
//
//let fru = new Map()
//
//fru.set("apple",100)
//fru.set("apple",150)
//fru.set("apple",1000)
//
//console.log(fru)
//
//
//// void it evaluates given expression and returns undefined
//
//let avoid = void 1
//
//console.log(avoid)
//
////op is undefined
//
//
//void console.log("expected output") 
//
//
//console.log(void (2 == 2))
//
//
//
//
//function aaaaaaaaa()
//{
//	let abbbbb = 10 + 20
//	
//	console.log( abbbbb )
//}
//
//aaaaaaaaa()
//
////simple calucaltoe
//
//
//function simple_calculator(exp,...val)
//{
//
//	  switch(exp)
//	  {
//	  	case 'add' :{    let result =0
//		                      	for(let v of val)
//					  	  	    { 
//					  	  	      result+=v
//					  	  	    }
//	  	                 
//					     return result
//	  	                 break;
//					}
//	  				 
//	  	case 'sub' : {    let result =0
//		                      	for(let v of val)
//					  	  	    { 
//					  	  	      result-=v
//							
//					  	  	    }
//	  	                 
//					     return result
//	  	                 break;
//					}
//	  				 
//	  	case 'mul' : {    let result =1
//		                      	for(let v of val)
//					  	  	    { 
//					  	  	      result*=v
//					  	  	    }
//	  	                 
//					     return result
//	  	                 break;
//					}
//	  				 
//	  	case 'div' : {    let result =1
//		                      	for(let v of val)
//					  	  	    { 
//					  	  	      result/=v
//					  	  	    }
//	  	                 
//					     return result
//	  	                 break;
//					}
//	  }
//
//}
//
//console.log("Addition",simple_calculator('add',10,5))
//console.log("Substraction",simple_calculator('sub',10,5))
//console.log("Multiplication",simple_calculator('mul',10,5))
//console.log("Division",simple_calculator('div',10,5))
//
//
//
//// js switch with multiple case
//
//let fruite=prompt("enter fruit")
//switch(fruite)
//{
//	case 'apple':
//	case 'banana':
//	case 'chikku':console.log(fruite,"is fruite")
//	              break;
//	default : console.log(fruite," not fruite")
//}
//

//wap to print fibonacii series using recursion function

//function fibonacci(num) {
//    if(num < 2) {
//        return num;
//    }
//    else {
//        return fibonacci(num-1) + fibonacci(num - 2);
//    }
//}
//
//// take nth term input from the user
//const nTerms = prompt('Enter the number of terms: ');
//
//if(nTerms <=0) {
//    console.log('Enter a positive integer.');
//}
//else {
//    for(let i = 0; i < nTerms; i++) {
//        console.log(fibonacci(i));
//    }
//}
//

//wap to print the  factorial number usig recursion

//function fcatorial(num)
//{
//	if(num == 0)
//	{
//		return 1
//	}
//	else{
//		
//		return num * fcatorial(num - 1)
//	}
//}
//
//console.log(fcatorial(10))

// wap to print the primt numbers using recursion

function prime_num(num)
{
	if(num == 1)
	{
		console.log("1 is not a prime number")
	}
	else if(num == 2)
	{
		console.log("2 is prime number")
	}
	else if(num % 2 != 0)
	{
		console.log(num," is prime")
	}	
    else{
		console.log(num," is not prime")
	}	

}

prime_num(10)
prime_num(17)
prime_num(2)
prime_num(10)