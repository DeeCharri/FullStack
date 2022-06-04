/*Question
1.What is the output of the following code?

const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
console.log(arrayOfOddNumbers.length);

Ans:101
explination:
1,3,5,undefine*97,199=>3+97+1=>101

2.How can you double elements of an array using reduce? Please note that you cannot create additional variables.
ex: 
const arrayOfNumbers = [1, 2, 3, 4];
console.log(arrayOfNumbers.reduce((total, currentValue, index, array) => total+=currentValue)*2);



3.What is the output of the following code snippet?

let arrayOfLetters = ['a','b','c','d','e','f'];
const anotherArrayOfLetters = arrayOfLetters;
arrayOfLetters = [];
console.log(anotherArrayOfLetters);

ans : ['a','b','c','d','e','f']

4.How could you print unique values from an array?

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
 // [1, 2, 4, 5, 6]

function getUniqueValues(numbers) {
  const set = new Set(numbers);
  return [...set];
}
console.log(getUniqueValues(arrOfNum));

const age=[18,23,23,34,18,23,12,14,14,15]
const a = new Set(age);
console.log(a) 

//5.Question
//How could you destructure array elements?

const address = ["583, Margaret Street", "LOS ANGELES, CA", "USA"];

//without destructure
console.log(
"Address1:"+address[0]+"  Address2:"+address[1]+"  Address3:"+address[2]
)
//with destructure
const [add1,add2,add3]=["583, Margaret Street", "LOS ANGELES, CA", "USA"];
console.log(
"Address1:"+add1+"  Address2:"+add2+"  Address3:"+add3
)

6.What is the value of x & y?

const fn = (a, ...numbers, x, y) => {
    console.log(x, y)
};

we get syntax error:Rest parameter must be last formal parameter
 bcz we have defined rest parameter in the funcation. if we mention rest parameter, 
we should not allow to add other parameters to the next of rest parameter.
but in above ,w eare defining x and y after the rest parameter so we get syntax error

function myFun(a,  b, ...manyMoreArgs,x,y) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun(1,2,3,4,5,6,7,8) 

Question
Guess the output of the following code:

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};
var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

op: console.log(stoleSecretIdentity()); undefine
we are getting undefine bcz , we are assigning the body of function getSecretIdentity to stoleSecretIdentity.
then we invoked the stoleSecretIdentity but this is being invoked in the global context where the "_name var" doesn't exist
so when we call this stoleSecretIdentity , it starts looking the _name var ,
but it doesn't found it in the global so it returend the "undefined"

console.log(hero.getSecretIdentity()); John Doe 

What is the output of the following code snippet?

function greet() {
    console.log(this.name);
}
const sayHello1 = greet.bind({name: "Tom Cruise"});
sayHello1();
const sayHello2 = sayHello1.bind({name: "Zac Efron"});
sayHello2();
const sayhello3=greet.bind({name: "Deepa T"});
sayhello3(); 
const sayhello4=sayhello3.bind({name:"Swati Toroji"})
sayhello4();
we are getting this op "Tom Cruise "for both bindings. bcz In nested bind [binding within the bind]
we get the op of parent  bind only.
here parent bind is sayHello1 , child is sayHello2.

//Question
//What will be logged to the console after running the snippet below?

function greet() {
  setTimeout(function() {
    console.log(this.name);
  },1);
}
greet.call({name: 'Daniel Craig'});
 
//Question
//What will be logged to the console?

function Employee(name) {
    this.name = name;
}
Employee.prototype.getName = () => {
    return this.name;
};
const jason = new Employee('Jason');
console.log(jason.getName());

Question
What is wrong with the code written below?*/

var something = null;
var randomFunction = function () {
  var somethingElse = this.something;
  var unused = function () {
    if (somethingElse){
	console.log("hi");}else{console.log("hello");}
 unused()
  };
  something = {
    longStr: new Array(1000000).join('*'),
    someMethod: function () {
      console.log(someMessage);
    }
  };
};
setInterval(randomFunction, 1000);
