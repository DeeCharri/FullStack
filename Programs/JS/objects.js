//    using object literals
//  
//  const person ={
//  	Name:"Deepa",
//  	Subject:"Maths",
//  	Marks:90
//  }
//    create an empty object with new Object() then add 4 values
//  
//  let students= new Object()
//  students.Name="Deepa"
//  students.Salary=30000
//  students.Role="Testing Engineer"
//  
//  let  result;
//  for(i in students)
//  {
//   result+=`<h4>${students[i]}< h4>`
//  }
//  
//  objects are mutable
//  
//  const names={
//  	name1:"Dee",
//  	name2:"swa",
//  	name3:"veer"	
//  }
//  
//  const same_names=names
//  
//    for loop
//  
//  const emp ={
//  	Name:"Deepa",
//  	Subject:"Maths",
//  	Marks:90
//  }
//  let test="";
//  for(let i in emp)
//  {
//  	test+=emp[i]+" ; "
//  }
//  
//    adding properties
//  const emp1 ={
//  	Name:"Deepa",
//  	Subject:"Maths",
//  	Marks:90
//  }
//  
//  emp1['phone_number']=9986576977
//  
//  console.log(emp1)
//  
//    deleting properties
//  
//  delete emp1["Marks"]
//  
//  delete emp1.Subject
//  
//    nested objects
//  
//  let phones={
//  	Iphone:{
//  		RAM:"5GB",
//  		Price:75000,
//  		ROM:"4GB"
//  	},
//  	Samsung:{
//  		RAM:"4GB",
//  		Price:55000,
//  		ROM:"3GB"
//  	},
//  }
//  console.log(phones)
//  
//  let employees ={
//  	Name:"Akshay",
//  	Company:"Wipro",
//  	ROle:"AUtomation Engineer",
//  	project:{
//  		P_Name:"Schwab",
//  		Client:"Soma",
//  		Manager:"Keshav"
//  	},
//  	details:function() {
//  		return this.Name+" "+this.Company;
//  		
//  	},
//  	skills:['java','c++','JS']
//  }
//  
//  console.log(employees.details())
//  console.log(employees.details)
//  
//  console.log(employees.skills)
//  
//    adding a method to Object
//  
//  employees.work=function() {
//  	return this.Name+" "+this.Company
//  }
//  
//  console.log(employees)
//  
//    toUpperCase method
//  
//  employees.message=function() {
//  	return ("Hi Good Evening "+this.Name+" "+this.ROle).toUpperCase();
//  	
//  }
//  
//  console.log(employees.message())
//  
//  
//
//call ,apply and bind

let person= 
{
	display:function()
	{
	return this.fName+this.lname}
}

let person1 = {
	fName:"Veer",
	lname:"T"
}
let person2 = {
	fName:"Swati",
	lname:"T"
}

let persona1_details=person.display.call(person1)
let persona2_details=person.display.apply(person2) //apply method same as call() but oney one diff i,e it takes arguments as an Array

console.log(persona1_details)

//call() method takes aruguments seperately
let persons= 
{
	display:function(age,salary)
	{
	return this.fName+this.lname+" "+age+" "+salary;}
}
let persona1_details1=persons.display.call(person1,40,56000)
//apply() takes args as an array
let persona2_details2=persons.display.apply(person2,[24,56000])

//bind() this is used to barrow the method from another obhect. and it preserves the this keyword funcationality when we use the function as callback function

let students= 
{
	display:function()
	{
	return this.fName+"  "+this.lname}
}

let student1 = {
	fName:"Veer",
	lname:"T"
}
let student2 = {
	fName:"Swati",
	lname:"T"
}
//1way
let student_detials=students.display.bind(student1)();

//2nd way
let student_detials2=students.display.bind(student2);
//student_detials2();

//if we use display in callback
//we have 2 methods 1.setTimeOut 2.setTimeInterval

let display1 = students.display.bind(student1)();
console.log("using fun in callback without bind()"+display1)

