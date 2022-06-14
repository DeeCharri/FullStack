/*map is an collection of ordered key value pairs , here key can be any data type.
ways to create a map.
1.using new Map() constructor function.
2. Then we use set method to add the elements

*/

let map1 = new Map()
map1.set("Apple",100)
map1.set("Apple",100)
map1.set("Apple",700)

let fruits={}

map1.set("fruits",{name:'banana',price:500})

let fruits_price = []

map1.set("fruits_price",[900,800,700,600,500])

console.log(map1)

map1.set('Orange',1000)
map1.set('Mango',1000)

// how to access the map properties  and thr values, using get method we access the proeprty value

console.log(map1.get('fruits_price'))
console.log(map1.get('fruits'))
console.log(map1.get('Mango'))

/* Map methods 
1. has -> this is used to check whether the specifide property is present or not.

2. size  -> this method used to find the length of map.

3.delete -> this is used to remove the element from map, if we removed size of the map will be get changed

4.clear -> this method used to clear all the elements from map , it just remove the elements not map

5.set () -> used to add the elements.

6.get() -> used to access the element

7. Map Iteration.
   a. we use for .. of or forEach method to iterate the map elements

*/
