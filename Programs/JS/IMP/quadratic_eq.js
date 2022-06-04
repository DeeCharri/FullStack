function quadratic(a,b,c)
{
let r1, r2;

let squareRoot = (b*b) - (4*a*c);

// Conditions for Minus or Plus

if (squareRoot > 0) {
r1 = (-b - Math.sqrt(squareRoot))/(2 * a);
r2 = (-b + Math.sqrt(squareRoot))/(2 * a);
console.log("the root of quadratic equation "+r1+" and "+r2)
console.log("The equation is not a linear")

 }
else if(squareRoot == 0) {
r1 = (-b - 0 / (2 * a));
r2 = (-b + 0 / (2 * a));
console.log("the root of quadratic equation "+ r1 +" and "+r2)
console.log("The equation is a linear")
}
}

quadratic(1,1,-1)