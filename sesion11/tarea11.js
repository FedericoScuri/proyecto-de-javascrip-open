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



let fede= new estudiante
console.log(fede.obtendatos())