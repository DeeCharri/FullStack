/* 

Objects - this is a collection of Un-ordered key value pairs of different data types, key value pairs enclosed by curly braces.
key data type should be resticted to number,string and symbol.

key:value pairs are called properties 

there are 4 ways to create object 
1. object literals -> key value pairs defined inside the curly braces
2. using new keyword
3. object constructor function
4. Object.create()

*/

//Object Literals

let obj1 = {emp_id:102435,Name:"Swati",Company:"Wipro",salary:250000}

//using new keyword
let obj2 = new Object()
obj2.emp_id=102435
obj2['Name']="Swati"
obj2.Company="Wipro"
obj2['salary']=250000

//Object constructor function
function Employee(emp_id,Name,Company,salary){
	this.emp_id=emp_id
	this.Name=Name
	this.Company=Company
	this.salary=salary
	
}
let obj3 = new Employee(102435,"Swati","Wipro",250000)


//Object.create => we create new object using existed object by Object.create(), here we are inehriting the properties of old obj

let obj4 = Object.create(obj1)
obj4.emp_id = 102435
obj4.Name = "Swati"
//obj4.Company ="Wipro"
//obj4.salary = 250000

console.log("obj1",obj1)
console.log("obj2",obj2)
console.log("obj3",obj3)
console.log("obj4",obj4)

// access properties
// 1. by . notation and by [] notation

console.log("by . notation :", obj4.emp_id )
console.log("by [] notation :", obj3['Name'] )

// delete property
console.log("\n")
console.log("Before Deleting ",obj3)

delete obj3['Company']

console.log("after Deleting ",obj3)

//Nested objects -> an object contains another object is called nested object

let student ={
	Name : "Deepa",
	Age : 24,
	Name : "Swati", // duplication not allowed it takes last key 
	SKills : {
		Java : "OOOP",
		JS : "OOP scripting language"
	}
	
}

console.log("\n nested object")

console.log(student)

console.log(student.SKills)

console.log(student.SKills['Java'])

delete student.SKills.JS

console.log(student.SKills['JS'])


// Object method means we have defined the methods within the object is called Object methods. 

let Person = {
	Name : "Deepa",
	display : function () { // display is an property of Person
		return this.Name	
	}
}

console.log(" Object Method ",Person.display())

// so object contain all data types values

let students = {
	Name : "Veerendra",
	Age : 24,
	Skills : ['java','js','html','css'],
	Marks : {
		Maths:90,
		Science:85,
		Java:99
	},
	Pass:true,
	Fees:null,
	display : function (feedback)
	{
		return this.Name + "  " + this.Age + "  " + this.Marks.Maths + " " + feedback
	}
}

for(let i in students)
{
	console.log("type of " ,i," key is => ",typeof(i))
}

console.log(students.display(" => he scored good marks , very Good"))

// object constructor function -> using constructor function we can create multiple objects with similar properties , but in literals we can create more object with same properties

function employee(name,age,company)
{
	this.name =  name
	this.age = age
	this.company = company
}

let e1 =  new employee ("Dee",24,"wipro")
let e2 =  new employee ("swati",23,"tcs")
let e3 =  new employee ("sahana",27,"infosis")
let e4 =  new employee ("gagan",28,"congizant")

console.log("e1 =>",e1)
console.log("e2 =>",e2)
console.log("e3 =>",e3)
console.log("e4 =>",e4)

// add properties and methods to an object created from constructor function

console.log("\n added properties and methods to an object created from constructor function")

e1.salary = 25000000

e2.display = function (location) {
	
	return "Name : " + this.name + " company : " + this.company + " Location: "+ location
}

console.log(e1)

console.log(e2)

console.log(e2.display()) // we have not pass the value for location

console.log(e2.display('Banglore')) // 


/* getter and setter methods of Object

In Object we have 2 properties 

1. Data property  -> here we use . notaion or [] notation to set the value to property and to get the value of property

2. Accessor properties -> here we have get and set method to access the proeprty and to set the property

we have Object.define.property also used to add getter and setter methods

 */
 
 
 let employeees = {
	 
	 Name:"Akshay",
	 Salary:2500000000000,
	 // creating get method to access name and salary
	 
	 get GetName_Salary()
	 {
		 return this.Name +"        "+ this.Salary
	 }
 }
 
 // accessing values by data property [using . or []]
 
 console.log("\n accessing values by data property [using . or []]")
 
 console.log(employeees.Name+"                "+employeees.Salary)
 
 // accessing properties value by get method
 
 console.log("\n accessing properties value by get method")
 
 console.log(employeees.GetName_Salary)
 
 // setting the property to employeees object 
 
 // using data property
 
 employeees.Gender="Male"
 console.log( "gender :",employeees.Gender)
 
 // using accessor set method
 
 console.log("\n ================================================================")
 let Studentssss = {
	 
	 Name:"Akshay",
	 Salary:2500000000000,
	 // creating get method to access name and salary
	 
	 set change_name(new_name)
	 {
		 this.Name = new_name ;
		 
	 },
	 set add_gender(gender)
	 {
		 this.gender = gender
	 },
	 
	 get Get_details()
	 {
		 return this.Name +"  "+this.gender+"   "+this.Salary
	 }
 }
 
 Studentssss.change_name = 'Soma'
 
 Studentssss.add_gender = 'Male'
 
 
 console.log(Studentssss.Get_details)
 
 
 /* 
JAVA Object Prototype:
Object prototype assosiated with every function and object in js by default.

prototype is used to add properties and methods to an constructor function

synatx :  fun_name.prototype.propertY/method_name = value

prototype chain =>

If object tries  to access the  property  and that property present in both constructor function as well prototype,
in this situation , object will the  access constructor function bcz as per prototype
object should check from constructor function if it is not found in constructor function then it goes to check prototype */
 

employee.prototype.salary = 3500000

console.log(e1.salary) /* e1 is taking 25000000, only bcz of prototype chain means here e1 object trying to access salary property ,
but that sa;ary is in both constructor function as well prototype,
 but e1 access constructor function only bcz as per prototype object shold check from constructor function then it goes to prototype */
 
console.log(e2.salary) // e2 object first check in constructor function , then it checks prototype , it access prototype property bcz in constructor function salary is not thr so


// adding method to employee constructor function

employee.prototype.display_details =  function () {
	return this.name+" : "+this.age+" : "+this.company
}

console.log("e1 employee details",e1.display_details())

console.log("e3 employee details",e3.display_details())

/* change the value of prototype proerty*/

console.log("\n afer changind the value of prototype property ")
employee.prototype={salary : 450000}

console.log(e2.salary)

/* here  we have chnages the value of salary property [prototype property] , for e2 object we are still seeing the privous value only.
bcz if chnaged the prototype value , that will affect to the next objects which we created after chaning the value[ newly created objects],
previous object will have the privous value only */

// creating new object

let e5 = new employee("Gagan",28,"Deloitte")

console.log("\n e5 object detials :",e5)
console.log("gagan salary ",e5.salary)