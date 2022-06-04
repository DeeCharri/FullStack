//boolens can be objects if we use new keyword
let done=true;
let obj=new Object(done)

console.log(typeof(obj))

// numbers can be object if we use new keyword
let a =10;
let obj2=new Object(a);
console.log(typeof(obj2))

//objects -> the property field data type can be numbers,boolean,strings,null,arrays,functions and objects
let students={
	Name:"Deepa",
	Age=24,
	Class=null,
	Result:true,
	Courses:['science','maths','kannada'],
	details=function(){
		return this.Name+" "+this.Age+" "+this.Result
	},
	Family:{
		Father:"Shandily",
		Mother:"Kasturi"
	}
}

console.log(students)