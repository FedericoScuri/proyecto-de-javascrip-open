let array1=["josefina"]
let set = new Set()
set.add("Maira")
set.add("Alejandra")
set.add(...array1)
set.add("fede")

console.log(set)

set.add("fede")
console.log(set)

console.log(set.add("Javascript"))