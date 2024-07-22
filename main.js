// Ejercicio 1

// let n = parseInt(prompt("ingrese un numero")
// )

// for (let i = 0; i < 11; i++) {
//         let resultado = n * i
//         console.log(resultado);
// }

// Ejercicio 2
// let arregloNumeros= []
// let numero = 0

// do {
//         numero = parseInt(prompt("ingrese un numero " ))
        
//         arregloNumeros.push(numero)

//         console.log(arregloNumeros);

        
// } while (numero != 0);

// Ejercicio 3

// let numeroIncognita = 10
// let numeroingresado = 0
// let intentos = 0;


// do {
        
//         numeroingresado = parseInt(prompt("ingrese un numero dle 1 al 100"))
//         intentos ++

//         if (numeroingresado == numeroIncognita) {
//                 alert("felicidades acetaste el numero en "+intentos+" intentos")
             
                
//         }else if (numeroingresado < numeroIncognita){
//                 alert("el numero ingresado es menor que el incognita");
       
//         }else{
//                 alert("el numero ingresado es mayor que el incognita");
//         }
                
//         } while (numeroingresado !== numeroIncognita);
        
        
//         console.log("fin del ciclo");

// Ejercicio 4


// function esPrimo(numero) {
 
//     if (numero < 2) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//         if (numero % i === 0) {
//             return false;
//         }
//     }
    

//     return true;
// }
// console.log(esPrimo(1))


// Ejerciico 5


// function obtenerDivisores(numero){

// let divisores = [];

// for (let i = 1; i <= numero; i++) {
//         if (numero % i === 0) {
//             divisores.push(i);
//         }
//     }

//     return divisores;
// }
// let numero = 10;
// console.log(obtenerDivisores(numero))

// Ejercicio 6



// let elementos = [1,2,3,4,5,6,7,8,9,10]


// for (let i = 0; i < elementos.length; i++) {
//         console.log( elementos[i]);
       
// }

// Ejerciico 7


// let elementos = [1,2,3,4,5,6,7,8,9,10]


// for (let i = 0; i < elementos.length; i++) {
//         let multiplicar = elementos[i] * 2;
//         console.log(multiplicar);
       
// }

// Ejercicio 8 

 
// const familia = [
//         { nombre: 'Juan', edad: 45, relacion: 'Padre', ocupacion: 'Ingeniero' },
//         { nombre: 'Maria', edad: 43, relacion: 'Madre', ocupacion: 'Doctora' },
//         { nombre: 'Carlos', edad: 20, relacion: 'Hijo', ocupacion: 'Estudiante' },
//         { nombre: 'Ana', edad: 18, relacion: 'Hija', ocupacion: 'Estudiante' },
//         { nombre: 'Luis', edad: 70, relacion: 'Abuelo', ocupacion: 'Jubilado' }
//     ];


// for (let i = 0; i < familia.length; i++) {
//         let persona = familia[i];
//         let mensaje = `Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} años, soy ${persona.relacion} y trabajo como ${persona.ocupacion}.`;
//         console.log(mensaje);
//     }

// Ejercico 9

// Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// muestre los numeros impares.


// let elementos = [1,2,3,4,5,6,7,8,9,10]


// for (let i = 0; i < elementos.length; i++) {
//         let numeros  = elementos[i];
        
//         if (numeros % 2 !== 0  ) {
//            let impares = elementos[i];  
//            console.log(impares);  
//         } 
        
       
// }

// Ejercicio 10

// let sumaPares = 0;
// let sumaImpares = 0;
// let numero;


// do {
    
//     numero = parseInt(prompt("Introduce un número (0 para finalizar): "));

    
//     if (isNaN(numero)) {
//         alert("Por favor, introduce un número válido.");
//         continue;
//     }


//     if (numero === 0) {
//         break;
//     }

//     // Sumar el número a la suma correspondiente
//     if (numero % 2 === 0) {
//         sumaPares += numero;
//     } else {
//         sumaImpares += numero;
//     }

// } while (numero !== 0);

// alert("La suma de los números pares es: "  +sumaPares);
// alert("La suma de los números impares es: " +sumaImpares);

// Ejercicio 11

// let elementos = [1,2,3,4,15,6,7,28,9,10]
// let numeros = 0
// let numeroMayor = 0


// for (let i = 0; i < elementos.length; i++) {
//          numeros  = elementos[i];
        
//         if (numeros > numeroMayor) {  
//            numeroMayor= numeros;
            
//         } 
//     }      
//     console.log(numeroMayor); 

// Ejercicio 12

// let elementos = [11,23,3,4,15,6,71,28,9,10]
// let numeros = 0
// let numeroMenor = elementos[0] 


// for (let i = 0; i < elementos.length; i++) {
//          numeros  = elementos[i];
        
//         if (numeros < numeroMenor) {  
//           numeroMenor= numeros;
        
//         } 
//     }      
//     console.log(numeroMenor); 

// Ejercicio 13

// function obtenerMano(jugador) {
//     let mano;
//     do {
//         mano = prompt(`${jugador}, elige piedra, papel o tijeras:`).toLowerCase();
//     } while (mano !== 'piedra' && mano !== 'papel' && mano !== 'tijeras');
//     return mano;
// }


// function determinarGanador(mano1, mano2) {
//     if (mano1 === mano2) return null; 
//     if (
//         (mano1 === 'piedra' && mano2 === 'tijeras') ||
//         (mano1 === 'papel' && mano2 === 'piedra') ||
//         (mano1 === 'tijeras' && mano2 === 'papel')
//     ) {
//         return 'jugador1'; 
//     }
//     return 'jugador2'; 
// }


// function jugarPiedraPapelTijeras() {
   
//     const jugador1 = prompt('Introduce el nombre del primer jugador:');
//     const jugador2 = prompt('Introduce el nombre del segundo jugador:');

//     let ganador;
//     do {
    
//         const mano1 = obtenerMano(jugador1);
//         const mano2 = obtenerMano(jugador2);

//         ganador = determinarGanador(mano1, mano2);

      
//         if (ganador === null) {
//             alert('Empate, vuelve a jugar.');
//         } else if (ganador === 'jugador1') {
//             alert(`${jugador1} gana con ${mano1}!`);
//         } else {
//             alert(`${jugador2} gana con ${mano2}!`);
//         }

//     } while (ganador === null); 
// }


// jugarPiedraPapelTijeras();


// Ejercicio 14

// const filas = 5;


// for (let i = 1; i <= filas; i++) {
 
//     let fila = '';
//     for (let j = 1; j <= i; j++) {
//         fila += '*';
//     }
  
//     console.log(fila);
// }

// Ejercicio 15

// const filas = 5;


// for (let i = filas; i >= 1; i--) {
  
//     let fila = '';
//     for (let j = 1; j <= i; j++) {
//         fila += '*';
//     }
 
//     console.log(fila);
// }

// Ejercicio 16

let numeros = [34, 7, 23, 32, 5, 62, 32, 23, 87, 54];

function organizarArray(array) {
    let n = array.length;
 
    for (let i = 0; i < n - 1; i++) {
        
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
              
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}


organizarArray(numeros);


console.log("Array ordenado:", numeros);