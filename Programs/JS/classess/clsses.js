 /*class : class is a template which is used to create one or more than objects

 syntax:
 class class_name
 {
 	constructor()
 	{
 		
 	}
 	method1()
 	{
 		
 	}
 }
 
  here constructor is a defalut function of class which is used to initialize the properties
  constructor sohld be defined by constructor name.
  constructor function called when object created
  ex:
 */
 /*
  class person{
 	 constructor(name)
 	 {
 		 this.name=name
 	 }
  }
  
  let person1 = new person("deepa")
  
   person1 object created with name property and deepa value
  
   class methods: here methods can defined by method name with () , we don't use function keyword here
   method is nothing but function only. ,method has set of statements which is used to perform certain tasks
  
  ex:
  
  class person{
	 constructor(name,age,company,role)
	 {
		 this.name="Deepa";
		 this.age=24
		 this.company="WIpro"   //default value if we didn't pass the company name it methods will take the defalut value
	     this.Role="engineer"
	 }
	 display_name()
	 {
		 console.log("Name:",this.name)
	 }
	 display_age()
	 {
		console.log("Age : ",this.age) 
	 }
	 change_company()
	 {
		 console.log("company name ",this.company)
	 }
	static display_details(name,age,company,Role)  imp  
	 {
		 console.log("Hi I am class method. static helps me to convert myself into class method from object method")
		  //this.company="Infosis"  local var can overwrite the defalut value
		 
		  //this.Role="Full_Stack Developer"
		    this is local value for display_details 
		  so we get this value only if we pass different value when we creatong the object  
		  
		 console.log(`Name:${name},   Age: ${age},   Company: ${company},   Role: ${Role}`)
	 }
 }
 
  creating object using person class
 
 let person1=new person("Deepa",35)
 let person2=new person("Swati",25)
 
  accessing the methods of objects using person1 and person2 objects
 
  person1.display_name()
  person2.display_name()
  person1.change_company()
   accessing properties from Object
  console.log(person1.age)
  console.log(person2.age)
  
   calling the method of Object
  person2.change_company()   we shouldn't pass the arguments in method .
  we shold pass while creating a object
 
 
 
  person3.display_name();
  person3.display_age();
  person3.change_company();  
 
 //calling class method using classname.method_name
 let person3=new person("Swati",23,"Wipro","Testing")  //here we are passing role as test engineer
 
  person.display_details("gagan",25,"TCS","Testing Engineer"); //op undefine except Name , name is taking person as value
 person.display_details(person3); //op undefine except Name , name is taking person as value
 
 
 
 for static method we have to pass parameter ,it won't take any pbject properties like above
 call the class method and pass the values  
 
 person.display_details("gagan",25,"TCS","Testing Engineer");
 
 console.log("Type of class is ",typeof(person))
 
  
  make the display_details method as class method for that we use static keyword
  syntax
  static method_name() ===========> to make the method as class method  
 

 class Phone
 {
	 constructor(Brand,RAM,Price)
	 {
		 this.Brand=Brand;
		 this.RAM=RAM;
		 this.Price=Price;
	 }
	 Phone_details()
	 {
		 //return this.Brand+this.RAM+this.Price
		 console.log(`Phone_Brand : ${this.Brand},  RAM:${this.RAM},   Price:${this.Price}`)
	 }
	 static Feedback(Mobile)
	 {
		 console.log(`The ${Mobile} brighter display,
		 longer battery life and powerful cameras make it the best ${Mobile} for the money. 
		 But we wish it had faster charging and the ${Mobile} adaptive 120Hz display.`)
	 }
 }
 
 let phone1=new Phone("IPhone 11","128 GB",55000)
 let phone2=new Phone("Samsung 11","256 GB",65000)
 let phone3=new Phone("Redmi 9 pro","128 GB",25000)
 
 phone1.Phone_details()
 phone2.Phone_details()
 phone3.Phone_details()
 
 Phone.Feedback("IPhone 11")
 Phone.Feedback("Samsung 32s")
 Phone.Feedback("Redmi 9 pro")
 
 
/*======================================= doubts ====================================================

   
   1.in class ,i can't able to overwrite the default values 
   2.here in class method we can't able to return the op
   3.


class Student{
      constructor(name,age,classs)
	  {
	       this.name=name;
		   this.age=age;
		   this.classs="PUC"
	  }
	  details()
	  {
	       //console.log(`"Name:  ${this.name},  Age:  ${this.age},  Class:  ${this.classs}`)
		   
		   return this.name
	  }
	  static Marks(math,science)
	  {
		  console.log("The result of students")
		  console.log(`Name:  ${this.name},  Age:  ${this.age},  Mathematics:  ${math},  Science:  ${science}`)
	  }
	  
} 

let stu1=new Student("Deepa",24)

let stu2=new Student("Gagan",15,"SSLC")
//calling objects methods using object name
console.log(stu1.details())
stu2.details()

//calling class method using class name 

Student.Marks(96,94)

//inheritance ==>  

class student
{
	constructor(n,a)
	{
		this.name=n
		this.age=a
	}
	get personName()
	{
		return this.name
	}
	set age_change(x)
	{
		this.age=x
	}
	
}

let s1= new student("Deepa",24)

console.log(s1.personName)

s1.age_change=27

console.log(s1.age)  


class student{
	constructor(n,a)
	{
		this.name=n
		this.age=a
	}
	display()
	{
		return this.name
	}
}

class marks extends student{
	constructor(name,age,m1)   // here we should pass constructor properties. 
	{
		super(name,age) // here also we shold define using super key ,. imp is var name shold be same as parent class's vars which we have defined in the constructor
		this.m1=m1     // 
	}
	marks_display()
	{
		console.log(`${this.m1} :  ${this.name}  : ${this.age}`)
	}
	
}

let m1=new marks("deepa",24,45) // we are accessing name and age properties from student class

console.log(m1.display())
console.log(m1.name,m1.age)

m1.marks_display() */


class vehicle{
	constructor(brand,Year)
	{
		this.brand=brand
		this.Year=Year
	}
	vehicle_details()
	{
		console.log(`Brand: ${this.brand} , year :  ${this.Year}`)
	}
	static price_details(brand,price)
	{
		console.log(`brand: ${brand} , price: ${price}`)
	}
}

class car extends vehicle{
	
	constructor(brand,Year,wheels)
	{
		super(brand,Year)
		this.wheels=wheels
	}
	vehicle_details()
	{
		console.log(`brand: ${this.brand}, year: ${this.Year},   wheels:  ${this.wheels}`)
	}
}

let  obj_car= new car("BMW","2022",4)



//calling class method i,e price_details

vehicle.price_details("BMW","20 crores")

let v1= new vehicle("Benz",2021)
//in child and parent , we have same class. this is calling by vehicle object i,e oarent object
console.log("this is calling by vehicle object i,e oarent object")
v1.vehicle_details()

//this is calling by child object
console.log("this is calling by child object i,e arent object")
obj_car.vehicle_details()