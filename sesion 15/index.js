

let nombre="fede"
let apellido="scuri"

let obj={
    nombre:"fede",
    apellido:"scuri"
}

sessionStorage.setItem(persona, obj)

localStorage.setItem(objper, obj)

document.cookie="cookieFede;expires=" + new Date(now.getTime()+2*60000)
