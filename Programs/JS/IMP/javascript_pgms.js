/*//wAP to print hello world
console.log("Hellow World")

//JavaScript Program to Add Two Numbers

function add(a,b)
{
	console.log(a+b)
}

add(10,20)

//JavaScript Program to Find the Square Root

function sqrt(a)
{
	let sqrt=Math.sqrt(a)
	console.log("sqrt of "+a+" is "+sqrt)
}

sqrt(49)

//JavaScript Program to Calculate the Area of a Triangle

function traingle(base,height)
{
	let area= 1/2*base*height;
	return area
}

console.log("area of traingle is : ",traingle(10,5))

//JavaScript Program to Swap Two Variables)

function swap(a,b)
{
	console.log("before swapping:",a,b)
	let temp;
	temp=a;
	a=b;
	b=temp;
	console.log("after swapping:",a,b)
}

swap(10,20)

//JavaScript Program to Convert Kilometers to Miles

function convert_KM_Miles(x)
{
	const factor=0.62137
	let kms_miles=x * factor;
	console.log(x+"km equalst to "+kms_miles)
}
convert_KM_Miles(5)

//Javascript Program to Convert Celsius to Fahrenheit x*9/5+32

function convert_celsius_f(x)
{
	
	let c_f=x*9/5+32;
	console.log(x+"celsius equalst to "+c_f+" Fahrenheit")
}
convert_celsius_f(5)

//Javascript Program to Generate a Random Number
//we use Math.random() and Math.floor to get random Number

const random_num=Math.random()
console.log("generate random :",random_num)
const random_num2=Math.floor()
console.log("generate random :",random_num2)

//Get a Random Number between 1 and 10
//Math.random() * (heighest_num - lowest number)+lowest_num

let random1=Math.random() * (10-1)+1
console.log("Random Number between 1 and 10 is:",random1)

//from 10 to 20
let random2= Math.random() * (20-10)+10

console.log("Random Number between 20 and 10 is:",random2)

//Javascript Program to Check if a number is Positive, Negative, or Zero


function Po_Ne_Ze(a)
{
	if(a == 0)
	{
		console.log(a+"the given number is 0")
	}
	else if(a >0)
	{
		console.log(a+"the given number is +ve")
	}
	else
	{
		console.log(a+"the given number is -ve")
	}
}
Po_Ne_Ze(10)
Po_Ne_Ze(-11)
Po_Ne_Ze(0)

//Javascript Program to Check if a Number is Odd or Even

function odd_even(num)
{
	if(num%2 == 0)
	{
		console.log(num+" is Even nummber")
	}
	else 
	{
		console.log(num+" is ODD nummber")
	}
}
odd_even(10)
odd_even(23)

//JavaScript Program to Find the Largest Among Three Numbers

function max(a,b,c)
{
	if(a > b)
	{
		if(a > c)
		{
		 console.log(a+"is max number")
		}
	}
	else if(b > c)
	{
		console.log(b+"is max number")
	}
	else{
		console.log(c+"is max number")
	}
}

max(5,34,2)
max(5,34,200)
max(5000,34,2)

/*Javascript Program to Solve Quadratic Equation
//To find the roots of such equation, we use the formula,

//(root1,root2) = (-b ± √b2-4ac)/2

If the discriminant is greater than 0, the roots are real and different.
================>root1=(-b + sqrt(b2-4ac))/2a
  root2 = (-b - sqrt(b2-4ac))/2a
If the discriminant is equal to 0, the roots are real and equal.
root1 = root2 = -b/2a
If the discriminant is less than 0, the roots are complex and different.
root1=(-b/2a)+(i*sqrt(b2-4ac)/2a)
root2=(-b/2a)-(i*sqrt(b2-4ac)/2a)


function quadratic(a,b,c)
{
	let roo1,root2;
	let descriminant= b*b-4*a*c;
	if(descriminant > 0)
	{
		root1=(-b + Math.sqrt(descriminant))/(2*a)
		root2=(-b - Math.sqrt(descriminant))/(2*a)
		console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
	}
	else if(descriminant == 0)
	{
		root1=root2=-b/2*a
		console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
	}
    else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
	console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
}

quadratic(1,1,-1)
quadratic(1,0,0)
quadratic(1,-6,9)

//JavaScript Program to Check Prime Number

function prime(a)
{
let isprime=true
if(a === 1)
{
	console.log(a,"prime number is not a composite and not a prime number")
}
else if(a > 1)
{
	for(let i=2;i<a;i++)
	{
		if(a%i==0)
		{
			isprime=false;
			break;
		}
		
	}
   if(isprime)
   {
	console.log(a,"number is a prime")
   }else{
	console.log(a," number is not a prime")
   }
}
else
{
	console.log(a,"prime numbers should be greater than 1")
}

}

prime(10)
prime(11)
prime(1)
prime(2)

//JavaScript Program to Print All Prime Numbers in an Interval

function prime_numbers(low_n,high_n)
{
	let prime_numbers=[]
	for(let i=low_n;i<=high_n;i++)
	{
		let flag=0;
		for(let j=2;j<i;j++)
		{
			if(i%j == 0)
			{
				flag=1
				break;
			}
		}
	 if(i>1 && flag==0)
		 //console.log(i)
	     prime_numbers.push(i)
		 
	}
console.log("Prime Number",prime_numbers)
}
prime_numbers(2,10)

//JavaScript Program to Find the Factorial of a Number
function factorial(a){
let fact=1
	if(a >=1)
	{
		for(let i=1;i<=a;i++)
		{
			fact=i*fact;	
		}
		
	}
let factorial=fact
console.log("factorial of "+a+" is :"+factorial)
}

factorial(4)
factorial(8)
factorial(10)
factorial(3)

//JavaScript Program to Display the Multiplication Table

function multiplication_table(number)
{
	let multi_table=[];
	count=1;
	if(number == 0)
	{
		console.log("The multplication table of 0 is 0")
	}
	else{
		while (count <= 10)
		{
			let a=count*number;
			multi_table.push(a);
			count+=1
		}
	console.log(number+" multiplication table is => "+multi_table)
	}

}

multiplication_table(2);
multiplication_table(11);
multiplication_table(16);
multiplication_table(0);

//JavaScript Program to Print the Fibonacci Sequence 1,2,3,5,

function sequence(numm)
{
	let seq=[];
	let n1=0;
	let n2=1;
	let next_term;
	
	for(let i=0;i<=numm;i++)
	{
	     next_term=n1+n2
		 seq.push(n1)
	     n1=n2
	     n2=next_term
		 
	}
console.log(numm+" The fibonacci series :"+seq)
}

sequence(9)
sequence(6)
sequence(4)

//JavaScript Program to Check Armstrong Number
function Armstrong(number2)
{
const num_string=number2.toString()
const numberOfDigits = num_string.length;
let sum = 0;
let temp=number2

while(temp > 0)
{
	let rem=temp%10;
	sum+=rem**numberOfDigits
	temp=parseInt(temp/10)
}
if(sum == number2)
{
	console.log(number2,"is armstrong number")
}else{
	console.log(number2,"is not armstrong number")
}	
}
Armstrong(407)
Armstrong(1634)
Armstrong(1234)

//JavaScript Program to Find the Sum of Natural Numbers

function calculator(operation,arg1,arg2)
{
	switch(operation)
	{
		case "add":{
			let sum=arg1+arg2;
			console.log("the sum of arg1 and arg2 is :",sum)
			break;
		}
		case "sub":{
			let sub=arg1-arg2;
			console.log("the sub of arg1 and arg2 is :",sub)
			break;
		}
		case "mul":{
			let mul=arg1*arg2;
			console.log("the mul of arg1 and arg2 is :",mul)
			break;
		}
		case "div":{
			let div=arg1/arg2;
			console.log("the div of arg1 and arg2 is :",div)
			break;
		}
		default :{
			console.log("Operation doesn't found in the above list , so coming out from the loop")
			break;
		}
		
	}
}
calculator("add",10,20)
calculator("sub",10,20)
calculator("mul",10,20)
calculator("div",10,20)
calculator("mod",10,20)

//JavaScript Program to Find the Sum of Natural Numbers
function sum_natural(a,b,c,...numbers)
{
	let sum=a+b+c
	console.log(a,b,c,numbers)
	for(i of numbers)
    {
		sum+=i
	}
console.log("sumof given natural number is",sum)
}

sum_natural(1,2,3,4,5,6,7,8)
sum_natural(5,6,7,8,100,123,1,2,3,4,5,6,7,8,9)
sum_natural(1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20)

//JavaScript Program to Check if the Numbers Have Same Last Digit

function check_last_digit(NUM1,NUM2,NUM3)
{
	let array1=(NUM1.toString()).split("")
	let array2=(NUM2.toString()).split("")
	let array3=(NUM3.toString()).split("")
	let last_num1= array1[array1.length -1]
	let last_num2= array2[array1.length -1]
	let last_num3= array3[array1.length -1]
	console.log(last_num1,last_num2,last_num3)
	if(last_num1 == last_num2 == last_num3)
	{
		console.log("same last digit")
	}else{
	console.log("not same")
	}
}
check_last_digit(201,301,121)
//check_last_digit(207,301)
check_last_digit(201,302,121)

//OR

function check_last_digit_1(NUM1,NUM2,NUM3)
{
	let rem1=NUM1%10
	let rem2=NUM2%10
	let rem3=NUM3%10
	
	if(rem1 == rem2 == rem3)
	{
		console.log("same last digit")
	}else{
	console.log("not same")
	}
}
check_last_digit_1(201,301,121)
//check_last_digit(207,301)
check_last_digit_1(201,302,121)

//JavaScript Program to Find HCF or GCD

let hcf;

no1=10;

no2=12;
for(let i=0;i<=no1 && i<=no2;i++)
{
	if(no1%i==0 && no2%i ==0)
	{
		hcf=i
	}
}
console.log(`the HCF/GCD of ${no1} and ${no2} is ${hcf}`)


//JavaScript Program to Find HCF or GCD

let LCM;

no1=6;

no2=8;
let min=no1 < no2 ? no1:no2
while(true){
if(min%no1==0 && min%no2 ==0)
	{
		LCM=min
		console.log(`the LCM of ${no1} and ${no2} is ${LCM}`)
		break;
	}
	min++;

}

// program to find the sum of natural numbers using recursion

function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
 }

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

const result = sum(number);

// display the result
console.log(`The sum is ${result}`);

//JavaScript Program to Guess a Random Number

let lowest_num=parseInt(prompt("enter a lowest number to find random number"))
let high_num=parseInt(prompt("enter a highest number to find random number"))

//random number based on low and high number

let random_num=Math.random()*(high_num-lowest_num)+lowest_num

let b=parseInt(prompt(`Guess a number between given ${lowest_num} and ${high_num}`))

if(b != random_num)
{
	//b= parseInt(prompt("the given number is not a random number,please enter a another number"))
	alert("sorry,The given number is not random number")
}else if(b == random_num)
{
	alert("sorry,The given number is not random number")
}
*/
// program to shuffle the deck of cards

// declare card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

//empty array to contain cards
let deck=[]

//create a deck cards
for(let x=0; x < suits.length; x++)
{
	for(let y=0; y < values.length; y++)
	{
		let card={value:values[y],suits:suits[x]}
		deck.push(card)
	}
}
console.log("before shuffle")
for (let j=0;j<4;j++)
{
	console.log(deck[j])
}

//shuffle the cards

for(let i=deck.length-1; i > 0; i--)
{
	let j=Math.floor(Math.random() * i)
	//console.log(j)
	let temp=deck[i]
	deck[i]=deck[j]
	deck[j]=deck[i]
}

console.log("after shuffle")
//for(let i=0; i<deck.length;i++)
//{
//	console.log(deck[i])
//}

//if we want to display 4 shuffle cards

for(let i=0; i<4;i++)
{
	console.log(deck[i])
}