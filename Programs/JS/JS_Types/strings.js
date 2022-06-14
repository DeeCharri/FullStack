/*string is a collections of characters , charcers defined withing double quote or single quote 
4 ways to create an string
1. double quotes -> characters defined inside the double quote
2. single quotes -> characters defined inside the single quote
3. template string / template literal -> here we use back ticks to define the characters.

4. we can also create string using new keyword

let fname="Deepa"
let lname='Toroji'
let mname=`shandily`

let classs= new String("BCA")

console.log(fname,mname,lname,classs)
*/
/* template literals / back ticks introduced in ECMA Script 2015 or ECMA script 6
 uses of back ticks is , we can add variable / expression in side the string. this process is called interpolation 
 
 and we create multi line stirngs

let string = `Hi My name is ${fname} , my Father name is ${mname} and My surname is ${lname}`

console.log(string)

// access string characters - by index nuber and charAT() method  we can access paricular character

console.log(fname[2]) 
console.log("use charAT() -> last character of Deepa string is => ",fname.charAt(fname.length-1)) 

// js multiline string , using back ticks and back slashs

let para=`Hi I am deepa!
How are you?
i am feeling good#`
		   
let para1="Hi I am deepa! \
How are you?\
i am feeling good%"

console.log("multine string using backticks \n",para)

console.log("multine string using back slash \n",para1)
*/

// string methods
/*
1. charAt() -> returns the character of specified index.

2. conact() -> to continate the strings

3. replace() -> used to replace the old word by new word.
   syntax : string_name.replace("old word/letter","new word/letter")
   
4. split() -> used to split the string by given seperator

5. slice() -> used to return sub part of string.
   //syntax : slice(start,end)
   
6. substring() -> used to return sub sting of given string
   syntax : substring(start,end)
   start and end position
   
7. substr() -> used to return sub string from given string
   syntax : substr(start, length)
   start - starting position
   length - how many letters/ characters 
   
8. charCodeAt () -> used to return the asci value of character of specified index

9. toLowercase() -> convert string from upper to lower

10. toUpperCase() -> convert string from lower to upper

11. trim() -> used to remove the white space from starting and ending in the given string

12. includes () -> return true if specified character is present in the given string else false

13. search() -> used to search the specified pattern or character in the given string

14 match() -> this method is also used to serach the specified patter or word / chracters in the string

15 startWith() -> rerturn true if a given string starts with speciffied letter / pattern

16 endsWith() -> return true if given string ends with specified letter

*/
function stringss(string)

{
	let sentence = string
	
	console.log("Length : ",sentence.length)
	
	console.log("charAt : ", sentence.charAt(3))
	
	console.log("charCodeAt : ",sentence.charCodeAt(3))
	
	console.log("Replace : ", sentence.replace('Hello','Deepa'))
	
	console.log("trim  : ",sentence.trim())
	
	console.log("toUpperCase : ", sentence.toUpperCase())
	
	console.log("toLowerCase : ", sentence.toLowerCase())
	
	console.log("substr(start,length) : ",sentence.substr(4,9))
	
	console.log("substring(start,end) : ", sentence.substring(4,9))
	
	console.log("slice(start,end) : ", sentence.slice(4,8))
	
	console.log("includes() : ", sentence.includes('Hi'))
	
	console.log("includes() : ", sentence.includes('hello'))
	
	console.log(" startsWith : ", sentence.startsWith('Hi'))
	
	console.log(" startsWith : ", sentence.startsWith('Hello'))
	
	console.log(" ends with : ", sentence.endsWith('ing'))
	
	console.log(" ends with : ", sentence.endsWith('eve'))
	
	console.log(" ends with : ", sentence.split(" "))
	
	console.log("conact : ",sentence.concat("I love you"))
	
	console.log("search : ",sentence.search("Good"))
	
	console.log("search : ",sentence.search("Evening"))
	
	console.log("match : ",sentence.match("Hi"))
	
	console.log("match : ",sentence.match("hi"))
}

stringss("Hi Hello Good Morning")

let m ="   hi              "
console.log(m.length)
let result = m.trim()

console.log(result.length)