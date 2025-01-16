

var nombre: string
nombre = "Meme"
console.log(`Hola, ${nombre}`)

//any types ts7006

export function sumarDos(a:number, b: number){
    return a + b
}

//las reglas en ts estan numeradas
//primitivos

//Number, string, boolean, null, symbol, bigint, void, undefine

console.log(sumarDos(12,4))

const suma = sumarDos(2,3)

//el any: herramienta que se usa para pasar de codigo tipado a no tipado, ojaime

//buena forma de tipar, con el type, como un json
//los typos son objetos

export type sumParamts = {
    uno: number, 
    dos: number
}


function sumParamts(params: sumParamts){
    return params.uno +  params.dos
}

//interfaces
//agrupa clases

interface restarDosParams{
    first: number,
    second: number;
}

export function restarDosParams(params: restarDosParams){
    return params.first + params.second
}




