class estudiante{
    nombre="fede"
    asignatura=["Javascript", "HTML", "CSS"]

    obtendatos() {
        return {
            nombre:this.nombre,
            asignatura:this.asignatura
        }
        
    }
}

let edad=32
console.log(edad)

let fede= new estudiante
console.log(fede.obtendatos())