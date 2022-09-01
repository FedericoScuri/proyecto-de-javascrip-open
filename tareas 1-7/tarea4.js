let nombre="fede"
let cadenadetecto=`hola, mi nombre es ${nombre}, y soy de Argentina`

let apellido="scuri"

let cadenaApellido=`Mi apellido es ${apellido}.`

let estudiante=`mi nombre es ${nombre} y mi apellido es ` + apellido

let estudianteMayus= estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus=estudiante.toLowerCase()
console.log(estudianteMinus)

let largo=console.log(estudiante.length)

let posicion0=console.log(nombre[0])

let ultimaPosicion=console.log(apellido.length-1)

let sinEspacio=estudiante.replace(/ /g,"")
console.log(sinEspacio)

let Existe=estudiante.includes(nombre)
console.log(Existe)