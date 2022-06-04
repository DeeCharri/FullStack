/*1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno


var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
//1st way using keys
console.log(Object.keys(student))*/

/*2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };


var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

let key="rollno"
console.log("before deleting a roll number",student)
delete student.rollno
console.log("after deleting a roll number",student)

3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
//we have to extract keys from object then keys.length
let keys=Object.keys(student)
console.log("length of student",keys.length)

4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
 Go to the editor

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

//let array_entries=Object.entries(library)

//let ourput=array_entries.forEach((element) => {console.log(element[0],element[1],element[2])})

for(let i=0;i < library.length;i++)
{
	var book = library[i].title+" by "+library[i].author
	if(library[i].readingStatus)
	{
		console.log("Already this book ",book)
	}
	else{console.log("Yet to read this book ",book)}
}

//Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes
//cylinder : V = πr2h

function cylinder(height,diameter)
{
	let cylinder=Math.PI*diameter/2*2*height
	
	return cylinder
}

let res=cylinder(100,30)
console.log("cylinder:",res.toFixed(4))

6. Write a Bubble Sort algorithm in JavaScript. Go to the editor
Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]



//let bubble_sort=data.sort();
//
function sort_array(array) {
  var done=false
  while(!done)
  {
	done=true;
	for(let i=1 ; i < array.length ;i++)
	if(array[i-1]>array[i])
	{
		done=false
		let temp=array[i-1]
		array[i-1]=array[i]
		array[i]=temp
		
	}
  }
  return array
}
let data=[6,4,0, 3,-2,1]
console.log(sort_array(data)) 
function clock()
{
const d= new Date()
return d
}
console.log(setTimeout(clock(),1000))*/


