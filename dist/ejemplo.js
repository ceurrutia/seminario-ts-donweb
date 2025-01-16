"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumarDos = sumarDos;
exports.restarDosParams = restarDosParams;
var nombre;
nombre = "Meme";
console.log(`Hola, ${nombre}`);
//any types ts7006
function sumarDos(a, b) {
    return a + b;
}
//las reglas en ts estan numeradas
//primitivos
//Number, string, boolean, null, symbol, bigint, void, undefine
console.log(sumarDos(12, 4));
const suma = sumarDos(2, 3);
function sumParamts(params) {
    return params.uno + params.dos;
}
function restarDosParams(params) {
    return params.first + params.second;
}
