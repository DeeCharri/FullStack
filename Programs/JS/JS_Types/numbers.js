//numbers -> this is primitive data type. numbers can be inter or float

/*let a =10;
let b =10.3;

console.log(a+" : "+typeof(a)+"\n"+ b+ " : " +typeof(b))

// if we do substraction /multiplication/divison with numric strings or numeric and numbers , data type converts to numbers

let a1 = '3' - 2

console.log(a1+" : "+typeof(a1))

// if we do airthmatic operation with  boolen value to numbers, numeric string [except add], we get number data type

let a2 = '3' - true
let a3 = 8 + true
let a4 = 4 - false
let a5 = 5 + false

console.log(a2,a3,a4,a5)

//NaN is not a number , a number is not leagal

// if we do sub,mul,div opearation  between non numeric stirngs we get NaN
//if we do airhtametic operation between undefined  and number,null,boolen we get NaN 
//if we do sub,mul,div between undefined and numeric value , w eget NaN 
//'1' + undefined ==> 1undefined

let result

result = 'hi' - 'hi'
console.log(result)

result = 'hi' * 'hi'
console.log(result)

result = 'hi' / 'hi'
console.log(result)

result = 1 + undefined
console.log(result)

result = '2' - undefined
console.log(result)

result = 1 * undefined
console.log(result)

result = 1 / undefined
console.log(result)


// is NaN() -> used to check the number is NaN or not

let num = 1 + 1

let num1 = 'hi' - 'hello'

console.log(isNaN(num))
console.log(isNaN(num1))
console.log(typeof(num1))



// infinity -> the calcuation done and that exceeds the largest or smallest i,e infinity

console.log(2/0)  -> infinity ===> any number devided by 0
console.log(-2/0) -> -infinity ===> any -ve number devided by 0 


//BigInt --> normally the  number is in between -(2**53 -1) to (2**53 -1), if i want to disply more than this we use BigInt

//for BigInt , the number is appended by n
// if the number is appended by 1 that means that is big integer
// we shouldn't combine bigint with others [number,string etc]
let num9 = 10n
let sum = num9 + 1n

console.log(sum) */

//Numbers Method
// 1 toString() -> this is used to convert number type to string

let a = NaN

console.log(typeof(a.toString()))

// 2 toFixed() --> this is used to return sting with whole number and specified decimal digits


let b = 12.23456789
console.log(b.toFixed(3))

// 3. toPrecision()  --> t=return string with whole number and specified digits

let c = 12.23456789
console.log(c.toPrecision(3))

// 4. isFinite()  -> this is used to check whether the numbe ris finite or not
 let d= 1
 
 console.log(isFinite(d))
 
 // 5 . isInteger()
 
 //6. parseInt - to convert numeric string to number
 
 //7 parseFloat - to convert numeric sting to float
 
 //valueof()
 
 