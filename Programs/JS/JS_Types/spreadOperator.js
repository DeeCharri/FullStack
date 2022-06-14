// spread operator is defined by 3 dots ... , 
//advantages
//1.this is used to spread out an array.

let a = ["My","Name","is","Deepa"]

console.log(a)
console.log(...a)

console.log('My', 'name', 'is', 'Deepa');

// 2. this is used to make a deep copy of JS object

let b =[...a]

console.log(a,b)

// 3. we can cloned the array/obbjects  using spread operator

/* In js , objects are assigned by rerefence not by value , for that if we copy the array without using spread operator , new array and old array 

refered to same arrays , so if we make any changes in one array that will affect to other array also , to avoid this we use spread operator,
by using spread operator we can make deep copy and we have same value in new array and but that array refrened to different array.

if we make any chnages in one object that will not affect to other.

but in shallow copy if we make any changes by mutation operation [add, delete,modify] , then only both arrays will be affected.

if we do assignment operatrion , only assigned array.object will be chnaged not other array/object

ex: let a =[1,2,3,4]

let b = a

console.log(a,b)
console.log("\n adding elements to b using asiign ment operator \n")
b = [10,20,30,40]

console.log("\n there fore only b values get changed , assignment operator create another address, \n")
console.log(a,b)


let m = [1,2,3,4]



let n = m

console.log("\n adding elements to m using push i,e called mutation \n")

m.push(100)

console.log("\n here m and n still reffering to the same array so n array also changed by adding element to m")

console.log(m,n)
  */


let arr = [2,4,6,8]

let copy_arry = arr // we didn't use spread operator to copy the arr array  this is shallow copy

console.log(arr,copy_arry)

// we are pushing an element 

arr.push(10) // here we are adding 10 value to arr ,

console.log(copy_arry) // but that value will be added to this array also 


let copy_array = [...arr]

arr.push(12)  // here we are pushing 12 to arr array 

//let me check that will affect to new array also i,e copy_array

console.log("copied array",copy_array)
console.log("original array",arr)

// using spread operator we can maerge objects also

let obj1 = {x:2,y:3}

let obj2 = {z:10}

let obj4 = {...obj1}

console.log("obj4",obj4)

let obj1_obj2 = {...obj1,...obj2}

console.log(obj1_obj2)


let obj5 = obj2

console.log("obj5",obj5)


obj2.a = 10

console.log(obj5)

/* 
REST Parameter  => if we pass the spread operato as parameter , that will change as rest parameter 

if we pass the spread operator while calling the function that will act as spread operator only.


rest parameter allows function to accept multiple arguaments , here we pass the arguments as an array not a numbers/strings etc..


*/

//  when the spread used as parameter , i,e known as rest parameter 
function numbers(...nums)
{
	console.log(nums)
}

numbers(1)  //-> num is rest parameter , it accepts one value bcz we have only one value

numbers(1,2,3,4,5,6,7,8,90,7,8,9)

// when spread operator used as argument , known as spread paramter only .

function number(x,y,z)
{
	console.log(x,y,z)
}

let n = [1,2,3,4,5,6,7,8,90,7,8,9]

number(...n)  /*this acts like a spread operator only , 
bcz we are passing while calling the function , so function takes required arguments , rest values will be ignored here */




/* 
 if we used spread operator as parameter , that is called rest parameter. so this allows function to accept multiple values.
 
 
if we used spread operator as an argument [if we passed spread operator while calling the function ] , the function will take required arguments , 
it ignores rest arguments. if function required 3 , it accepts 3 only
*/

function add(a,b)
{
	let c = a+b;
	return c
}

function main(add,a,b)
{
	console.log("Higher Order Function")
	return add(a,b)
}

console.log(main(add,10,20))