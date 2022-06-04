//JavaScript Array concat() and spread operator
let Name=['Deepa','Swati','Veerendra','Deepti','Sahana','Sweta']
let Age=[24,22,26]
let salary=[10000,20000,30000]
let Name_Age=Name.concat(Age,salary)
let mrge_plus=Name+"<==>"+Age+"<==>"+salary
let merge=[...Age,...Name,...salary]

//JavaScript Array constructor

let nums=[1,2,3,4,5]
let num_constructor=nums.constructor
console.log(num_constructor)

//JavaScript Array copyWithin()
let copy_nums_within=nums.copyWithin(3,0,1);

//JavaScript Array entries()

let fruits=['Banana','Orange','Apple','Mango']
let fruits_entries=fruits.entries();


//JavaScript Array every()

const ages=[12,24,23,15,16,27,45,12,11]

let ages_gt_18=ages.every(check18);

function check18(age)
{
	return age>18
}

let ages_GT_18=ages.every((age)=> age > 18);
let ages_NE_18=ages.every((age1)=> age1 != 18)

//JavaScript Array fill()

let stu_ages=new Array(5);
let output=stu_ages.fill(23) // filss the array with 23 5times bcz size is 5

let modify_output=output.fill(16,1,3)

//JavaScript Array filter()

let emp_ages=[12,24,23,15,16,27,45,12,11]

let filter_ages=emp_ages.filter((e_age=> e_age <= 18));

//JavaScript Array find()

let gt_18=emp_ages.find((age)=> age > 18)
//JavaScript Array findIndex()
let position_gt_18=emp_ages.findIndex((age)=> age > 18)

//JavaScript Array forEach()
let result=0;
let numbers=[1,2,3,4,5,6,7,8];
numbers.forEach(n=> result+=n);


let sub = 0;
const n = [65, 44, 12, 4];

n.forEach(subs)

function subs(num)
{
	sub-=num
}

console.log("using normal function and performing substraction operation",sub)

//JavaScript Array.from() => used to convert the string into array

let string="HIIAMDEEPA"

let array=Array.from(string)

//JavaScript Array includes()

let Fruitssss=["Banana", "Orange", "Apple", "Mango"];

let res=Fruitssss.includes("Orange")
let res1=Fruitssss.includes("ORANGE")

//Array.isArray
//let string="HIIAMDEEPA"
//let array=Array.from(string)

console.log("checking the staring var is array or not",Array.isArray(string))
console.log("converted string var into array ",Array.isArray(array))

//keys()

const fruitss1 = ["Banana", "Orange", "Apple", "Mango"];

const obj_fruits=Object.keys(fruitss1)
let list=`<ul>`
for(i of obj_fruits)
{
list+=`<li>${i}</li>` 	
}
list+=`</ul>`

//JavaScript Array map()-creates a new array from calling functiion for every element of an array. it return the op from functiion

let integers=[1,2,3,4,5,6,7,8]

//normal function
let square=integers.map(squares)

function squares(int)
{
	return int**2
}
let map=`<h5>${square}</h5>`
//arrow function
let map1=integers.map((int)=> {return int*10})

//prototype ==> which is used to add new properties to the array elements , we use Array.prototype.array_name[the name assign with funcation]
//we added built in methods like toLowerCase and toUpperCase
Array.prototype.fun_uppercase = function ()
{
	for(let i=0;i<this.length;i++)
	{
		this[i]=this[i].toUpperCase()
	}
}

let student_names=['Deepa','Swati','Veerendra','Deepti','Sahana','Sweta']

student_names.fun_uppercase()

Array.prototype.myLower=function(){
	     for(let i=0;i<this.length;i++)
		 {
			 this[i]=this[i].toLowerCase();
		 }
	
}
let student_name=['Deepa','Swati','Veerendra','Deepti','Sahana','Sweta']
student_name.myLower()

//JavaScript Array reduce() --> it executes the reducer fun for each element and returns the single value i,e function's accumulated result/op
let ints=[1,10,20,30,40]
let sum=ints.reduce((total,currentvalue)=> {return total+=currentvalue})
console.log("sum of elements of ints is:",sum)
let substraction=ints.reduce((total,currentvalue)=>{return total=total-currentvalue})
//reduceRight
let substraction1 = ints.reduceRight((total,currentvalue)=> {return total-=currentvalue})
let multiplication = ints.reduceRight((total,currentvalue)=> {return total*=currentvalue})
let divison = ints.reduceRight((total,currentvalue)=> {return total=total/currentvalue})