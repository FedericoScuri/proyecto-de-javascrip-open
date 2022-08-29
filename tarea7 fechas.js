
let fecha = new Date()
console.log(fecha)
let fechaNacimiento= new Date(1998,09,05,03,15,32)
console.log(fechaNacimiento)

let esMayor= fecha>fechaNacimiento
console.log(esMayor)

let diaDeNacimiento= fechaNacimiento.getDate()
console.log(diaDeNacimiento)

let mesDeNacimiento=fechaNacimiento.getMonth()+1

let añoDeNacimiento=fechaNacimiento.getFullYear()
console.log(añoDeNacimiento)