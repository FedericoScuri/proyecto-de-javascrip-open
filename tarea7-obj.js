
let fede={
    nombre:"federico",
    apellido:"scuri",
    edad:23,
    altura: 175,
    eresDesarrollador: "si"
}
function usuario(nombre,apelldio,edad,alturacm,desarollador){
    this.nombre=nombre
    this.apelldio=apelldio
    this.edad=edad
    this.alturacm=alturacm
    this.desarollador=desarollador
}


let edad=fede.edad
console.log(edad)

let lista1=[]
lista1.push(fede)
console.log(lista1)

let dalmiro=new usuario("Dalmiro","Funes",23,174,"no")
let cristian=new usuario("cristian","Fernandez",23,156,"si")
lista1.push(dalmiro)
lista1.push(cristian)
console.log(lista1)
