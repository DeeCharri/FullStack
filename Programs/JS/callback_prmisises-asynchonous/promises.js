/*let done=prompt("enter true or false")
let promise = new Promise(function (resolve,reject) {
	
	if(done)  // if we pass true or false ,but code is executing without any errors means  we are performing the actions wihtout any errors.
	{
		resolve("I am fulfilled")
	}
	else  // this part executed when error occurs 
	{ 
		reject("I am rejected")  // if we didn't pass the args , code won't get executed we get errors so  then prmise will be rejected
	}
})

promise
       .then(function(successmessage){
		   console.log(successmessage)
	   })
	   .catch( result_not_ok =(error_msg) => console.log(error_msg) ); 
	   
	   
let promise = new Promise(function (resolve,reject){
	let a=30;
	let b = 20;
	if(a > b) 
	{
		resolve("true2")
	}
    else if( a < b)	
	{resolve("true1")}
    else{
	reject("false")}
	
}) 

promise
     .then(success=(success_msg) => console.log(success_msg))
     .then(success=(success_msg) => console.log(success_msg))
	 .catch(failed = (error_msg) => console.log(error_msg))
*/

let promise = new Promise( res => res(2))

promise
    .then( v => {console.log(v)
	             return v*2})
	.then( v => {console.log(v)
	               return v* 2})
	.finally( v => { console.log(v)
	                   return v*2 } )
	.then( v => {console.log(v)
	              })