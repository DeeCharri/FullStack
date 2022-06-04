function odd_even(num)
{
	if(num % 2 == 0)
	{
		console.log(num," is even number")
	}
	else
	{
		console.log(num," is odd number")
	}
}

let num=parseInt(prompt("enter a number"))

odd_even(num)

