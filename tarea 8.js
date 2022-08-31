function siempreTrue(){
    return "true"
}

async function promesa(){
    return setTimeout(()=>console.log("Hola soy una promesa"), 5000)
}

function* generadoraI(){
    let indice=0
    while(true){
        yield indice+2
    }
}

