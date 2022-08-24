let arr=["agua","coca","leche","mesa","silla"];
arr.push("aceite de girasol")
console.log(arr)
arr.pop()
console.log(arr)
let peliculas=[{
    pelicula1:"contra cara",
    director:"John Woo",
    fecha:"1997"
},{
    pelicula1:"Harry Potter la camara de los secretos",
    director:"J.K Rowlin",
    fecha:"2002"
},{
    pelicula1:"Batman, el caballero de la noche asciende",
    director:"Christopher Nolan",
    fecha:"2012"
}]

let PosterioresAl2010= peliculas.filter(valor => valor.fecha>=2010)
console.log(PosterioresAl2010)

let directores= peliculas.map(pelicula=>{
    return pelicula.director
})
console.log(directores)
let titulos= peliculas.map(x => x.pelicula1)
console.log(titulos)

let concatemados= directores.concat(titulos)
console.log(concatemados)

let propagacion=[...directores,...titulos]
console.log(propagacion)