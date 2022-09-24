// Declaración de variables
const d = document;
let textoEncriptar = d.querySelector('#texto-encriptar');
let botonEncriptar = d.querySelector('#boton-encriptar');
let botonDesencriptar = d.querySelector('#boton-desencriptar');
let resultadoEncriptar = d.querySelector('#resultado-encriptar p');

let matriz =[ 
    ['a','ar'],
    ['e','enter'],
    ['i','imes'],
    ['o','ober'],
    ['u','ufat'],
    ];

let matrizInversa = [
    ['ar','a'],
    ['enter','e'],
    ['imes','i'],
    ['ober','o'],
    ['ufat','u'],
];
eventListeners();

//Event Listeners

function eventListeners(){
    botonEncriptar.addEventListener('click',()=> encriptar(resultadoEncriptar,matriz,textoEncriptar.value));
    botonDesencriptar.addEventListener('click',()=>encriptar(resultadoEncriptar,matrizInversa,textoEncriptar.value));
}

//Funciones
function encriptar(cajaDeSalida,matriz,texto){
    cajaDeSalida.innerText=''; 
    let textoEncriptado = texto.toLowerCase();
    
    
    for ( let i = 0;i < matriz.length;i++){
        textoEncriptado = textoEncriptado.replaceAll(matriz[i][0],matriz[i][1]);
        
    }
    cajaDeSalida.innerText = textoEncriptado; 
}
