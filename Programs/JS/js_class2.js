
let a=10;let b=20;let c=30;let sum;

sum = a+b+c

console.log("the sum of a,b,c is:",sum)

let def="JavaScript strings are for storing and manipulating text JavaScript"

console.log("The string is",def)
console.log("The length of string is",def.length)

//difference between = == ===

let x=10; let y=10;

let m="10"
let z= 50;

console.log("use of == :",x == y)

console.log ("use of === :",x === m)

//slice,substring and substr

let defi="JavaScript strings are for storing and manipulating text JavaScript JavaScript JavaScript JavaScript"

console.log("using slice(4,8):",defi.slice(4,8))
console.log("using substring(12,30):",def.substring(12,30))
console.log("using substr(5,10):",def.substr(5,10))

//replacing the text with replace()

console.log("replacing the JavaScript with Python====>",defi.replace("JavaScript","Python"))
console.log(defi)
console.log("it replace first match word only:=========>",defi.replace("JavaScript","C#"))

//if we want to replace all the matched words from the strig , use /get

console.log(defi)
//using just replace
console.log(defi.replace("JavaScript","React"))
//using /g

console.log(defi.replace(/JavaScript/g,"React"))

/*using /i we can replace the insensitive ,  in below we have ! sign , 
we wnat that in new text also but if we mention it in old and new string we get error,to over that we use /i */ 

let name="Hi Deepa!"
console.log(name.replace(/Deepa/i,"Swati"))

//toLowerCase and toUpperCase
 console.log(name.toLowerCase())
 
 console.log(name.toUpperCase())
 //concat
 let wish="Good Morning"
 
 console.log(name.concat(wish))
 //trim
 let string1="     hi i am deepa  "
 console.log(string1)
 console.log(string1.trim())
 
 //padding padStart() and padEnd()
 
 let p="6";
 let q="dee"
 let paddedxstart=p.padStart(3,'i')
 console.log(paddedxstart)
 let paddedxend=q.padEnd(4,"h")
 console.log(paddedxend)
 
 //charCodeAt()
 
 let name1="Deepa"
 console.log(name1.charCodeAt(1))
 //charAt()
 console.log(name1.charAt(3))
 
 console.log(name1[2])
 
 //split()
 
 let text="Hi I am Deepa How are you?"
 console.log(text.split(" "))
 
 console.log(text.replace(" ","!")) // replace 1st occurance matched character
 
 let o =text.replace(/ /g,"!") //replace all the matched words
 
 console.log(o)
 
 console.log("after split",o.split("!"))
 
 //search methods a)indexOf()
 
 let note="Please locate where 'locate' occurs! hi akh"
 
 console.log(note.indexOf("e")) //1st ooccurance of specified text in string
 
 console.log(note.lastIndexOf("e")) //last occurance of speciffied text in string
 
 console.log(note.search(/locate/g));
 
 console.log(note.indexOf("locate"))

 let text1="The rain in SPAIN stays mainly in the plain";
 
 console.log(text1.match("ain"))
 
 console.log("all ocuurance",text1.match(/ain/g))
 
 console.log(text1.match(/ain/))
 
 console.log(text1.includes("rain"))
 
 console.log(text1.includes("rains"))
 
 console.log("fom 4th character , the word starts with 'r' character",text1.startsWith("r",4))
 
 console.log("starts with:",text1.startsWith("T"))
 
 console.log("ends with:",text1.endsWith("the"))
 
 console.log("ends with:",text1.endsWith("the",37))
 
 //java script templates
 
 //template literals
 
 console.log("Template Literals")
 
 let text4=`The rain in SPAIN stays mainly in the plain`
 
 console.log(text4)
 
 let text5=`Hi Deepa's laptop is not working" properly`
 
 console.log(text5)
 
 let fname="Deepa"
 
 let age=24;
 
 let display=`I am ${fname} and I am ${age} years old`
 
 console.log(display)
 
 let area=10;
 let area2=30;
 
 let total=`total is:${(area)*(area2+1)}`
 
 console.log(total)
 
 //html template
 
 let header="Java Script"
 
 let tags=["bold","small","sub","sup"];
 
 let html=`<h2>${header}</h2><ul>`
 
 for (const y of tags)
 {
	 html +=`<li>${y}</li>`
 }
 html+=`</ul>`
 
 
 // javascript objects
 
 let emp = {name:"Deepa",age:24,company:"wipro"}
 
 console.log(emp)
 
 
 let out = "Hi I am"+" "+emp.name+" and my age is "+emp.age+" I am working at "+emp.company
 
 console.log(out)
//NaN - not a numner 

let de="hi"
let pa=20
let divi=de/pa

console.log("is Nan:",divi)

console.log(isNaN(divi))

//we can convert numbers into objects by using new

let xyz = 100;
let abc= new Number(100);

console.log(typeof(xyz))

console.log(typeof(abc))
 