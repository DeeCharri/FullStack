/*//array - this is a special variable which is used to collect values of different datatypes

//creating an array
//1. array literals - we defined the elements between square box ,a nd each element seperated by comma,

let a = [1,2,3,4,'a','b',4,5,6];

//2. array constructor - we use new key word with array functions

let b = new Array(4)

// we use fill() to add the values and we can index also to add the elements

//if we use fill() . all elements value will be same for if we  fill 3 4elements will be 3

b.fill(3)
console.log(b)

// if you want to fill other values we can done it by indexing

b[0]=1
b[1]=3
b[2]=5
b[4]=6

console.log(b)

//split ,spread operator , Array.from() we can create an array using string value

let str = "Deepa"

let ar = str.split("")

let ar1 = [...str]

console.log(ar,ar1)

console.log(Array.from(str))

let obj = {name:"Deepa"}

//inside a array we can store other objects also

let array=[1,'a',{'name':'deepa'},function hello(){console.log("hello")}];

console.log(array[array.length])

//if we want append the value to an array 

array[array.length]= "Hi"

console.log(array)

//we can access the array by index , and index starts from 0 to length array - 1

// add elements to an array
//by index , push , unshift

array[array.length] = 40

// to add the elements to end of an array w euse push

array.push(90)

//to add elements from starting we use unshift
array.unshift(12)

console.log(array)


// modify the existed value we use index

array[0]="Deepa"

console.log(array)

// if we have 5 elements , 0 to 4 if we add element to 6 th position , 5 th will be undefined

console.log(array.length)
// in array we have 8 elements means 0 to 7 , now i am adding an element to 9 what will be tge 7 8th one 

array[9]="Toroji"

console.log(array[7],array[8],array[9])

// remove an element from an array we use pop  to delete an element from last , to delete from start we use shift

array.pop()

console.log(array)

array.shift()

console.log(array.length)

array.push('de')
console.log(array.length) */

// array methods
/*
1. concat()  -> used to concatinate the 2 arrays

2. length -> which is used to find the length of an array 

4. reverse() -> used to reverse the elements 

6. sort() used to sort the elements in alphabatic and ascending order

7 join() used to join the array elements by joiner

8 slice() -> this method is used to create sub array from a given array it doesn't effect the original array
syntax : array_name.slice(start,end)

9 splice() -> this is used to add or/and remove the elements from an array , it modifies the original array.

It take 2 or more parameters
synatx -> array_name.splice(pos,elements to remove,..add elements)
1st parameter -> indicates -> position , from where elements need to be deleted / to be inserted
2nd parameter -> indicates -> number of elements to be deleted ,  0 means -> no elments needs to be deleted , 1 means 1 emelent get deleted from specififed [posiiton
3rd on wards parameter -> perform adding elements , if we pass 2elements , 2 elements will be added ,
 if we pass more than length of elements , from specified positon elements will be addedd

// search elements by their values / elements

1. indexOf() -> used to return the index of 1st occurance of specified element

2. lastindexOf() -> used to return the index of last occurance of specified element 

3. includes() - it returns tru if the elements is present in the array

4. find() - return first value of an array which has passed the test

5. findIndex()  - return index of first value /elements of an array which has passed the test

// example

let student = ['Deepa',24,'BCA',1,2,3,4,5,6,7,8,9]

let marks =[90,80,89]

console.log(student.concat(marks))

console.log([...student,...marks])

//console.log(student.replace(24,34))  -> in array we don't have replace method

console.log(student.reverse())

console.log(marks.sort())

// display in descending order
console.log(marks.sort().reverse())

console.log(student.join("==>"))

console.log(student.slice(4,7))  // here 4 is included and 7 is excluded

//don't remove any elements and don't add any elements using splice
console.log(student.length)
student.splice(3,0)

console.log(student.length)

// remove a elemnt and add 1 element 

console.log(student)
student.splice(4,1,'Toroji')

console.log(student)

// lets increase the size of an array 
console.log(marks.length)
marks.splice(2,0,100,90,99,96)

console.log(marks.length)

// display the element of speciffied index 

let array_numbers = ['a','b','c','d','b','c','d','e','f']


mid = Math.floor(array_numbers.length / 2)

console.log("mid",mid)

console.log("mid element is => " , array_numbers[mid])

console.log("indexOf() ==>",array_numbers.indexOf(3))

console.log("lastIndexOf() ==>",array_numbers.lastIndexOf(3))

console.log("includes() ==>",array_numbers.includes('d'))

console.log("includes() ==>",array_numbers.includes('m'))

*/
// MultiDiemntional Array ==> is an array that defined under the another array is called multi dimensional array or array contains another array
/*
let multi_array =[[1,2,3,4],[2,4,6,8],[1,3,5,7]]

// add elements to multi_array

multi_array[multi_array.length]=['Deepa',24]

console.log(multi_array)

// access values

console.log(multi_array[0])

console.log(multi_array[0][2])

console.log(multi_array[2][3])

console.log(multi_array[3])

// add elements to inner of an array

multi_array[3][2]="WIpro"

console.log(multi_array[3])

console.log("1st index elements before splicing ",multi_array[1] )

// add elements using splice method

multi_array.splice(1,1,['a','b','c','d','e','f'])

console.log("1st index elements after splicing[1st deleted then addedd] ",multi_array[1])

// remove elements from pop and shift

console.log("before popping and shifting ",multi_array)

multi_array.pop()
multi_array.shift()

console.log("after popping and shifting ",multi_array)

// add elements using push and unshift

multi_array.push(["swati","sahana","gagan"])
multi_array.unshift(["name","age","class"])
console.log("after pushing and unshifting ",multi_array)
*/

//Array Iteration methods

/*1. forEach() -> this calls the function on each element of an array, it doesn't return anything,
   if we want to get the op of foreach , we have to store that in global var
 
   syntax : array_name.forEach(value,index,array)
 
2. map() -> This method returns a new array by performing  the function on each element of an array it doesn't effect the original array.
   and this method doesn't call the function if array has no  elements

   syntax : array_name.map(value,index,array)

3. filter() -> this method returns a new array with elements that are passed the test

   synatx : array_name.filter(value,index,array)
 
4. reduce() -> this method runs a function on each element of an array and it returns a single value.
   here we perform airthmatic operations array elements ,then we return a single value.
   this method works form left to right.
   if we want to work from right to left use "reduceRight()" 
   in reduce right , for total -> the last value will considered it as total
   
   syntax(total,value,index,array) => here total will be considered as first element/value of an array

5. every() -> this method return true if all the elements of an array passed the condition
   syntax: array_name.every(value,index,array)
   
6. some() -> this method returns true if any one element passed the condition
   syntax: array_name.some(value,index,array)
   
7. find() -> this method returns the first element that has passed the condition
   syntax : array_name.find(value,index,array)
   
8 findIndex() -> this returns the first element of index that has passed the condition.
   syntax : array_name.findIndex(value,index,array)
   
9. Array.from() -> this is method useed to create an array form strings .

10. .keys ()  -> this method used to returns an array iterator object with keys of an array

11. .values() -> this method returns an array iterator object with values of an array

12. .entries() -> this method used to create an array iterator with key : value pairs   */

let array = [1,2,3,4,5,6,7,8,9]

let sum=0x
// forEach()

array.forEach((value) => sum+=value)

console.log("sum of an array :",sum)
 
// display each element

array.forEach((value,index) => console.log(index+"  "+value))

// map()
// square each eleemnt of array

let square_array= array.map((value) => value=value**2)

console.log("square_array ",square_array)

// square root of square_array

let sqrt_array=square_array.map((value) => value=Math.sqrt(value))

console.log("sqrt_array ",sqrt_array)

//filter ()

// create a array from array that contains only even elements

let even_array = array.filter((value) => {
	if(value % 2 == 0){return value}
})

console.log("even_array ",even_array)

// reduce ()  -> left to right

let array_sub = array.reduce((total,value) => total-=value)

console.log("substraction using reduce() :",array_sub)

// reduceRight() -> right to left

let array_sub1 = array.reduceRight((total,value) => total-=value)

console.log("substraction reduceRight() :",array_sub1)

//every()

let test= array.every((value) => {return value < 5 })
let test1= array.every((value) => {return value < 10 })
console.log("each element less than 5? every() :",test)
console.log("each element less than 10? every() :",test1)

//some()

let test2 = array.some((value) => {return value < 5})
let test3 = array.some((value) => {return value < 0})

console.log("any element less than 5?  some() ",test2)
console.log("any element less than 0?  some() ",test3)


let age=[12,23,45,65,89,103,24,18]
//find()

// find element great than 18

let age_18 = age.find((value) => {return value > 18})

console.log("1st element that has greater than 18 => ",age_18)

//findIndex
// find the index of element that has greater than 100

let age_100_index = age.findIndex((value) => {return value > 100})
console.log("1st index of element which has greater than 100 => ",age_100_index)

//Array.from()

let string = "Deepa"
let s_array = Array.from(string)
s_array.forEach((value) => console.log(`hi ${value}`))

//let obj = {Name:"Deepa",Age:24}
//console.log("if we try to convert obj to array using Array.from() we get epmpty value ",Array.from(obj))

// .keys()

let Keys = age.keys()
for(let k of Keys)
{
	console.log(`${k}  => ${age[k]}`)
}

// .values

let Values = age.values()

for(let val of Values)
{
	console.log(val)
}
	console.log(Values)

// .entries()

let age_entries_key_value_pair = age.entries()

for(let each of age_entries_key_value_pair)
{
	console.log("key value pair  => ",each)
}
console.log("key value pair  => ", age_entries_key_value_pair)






