/*
* Crear un programa en Javascript que realice lo siguiente:
    * Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
    * Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
    * Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
    * Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
*/

const numbers = process.argv[2];
const number = numbers.split(',');

const num1 = number[0];
const num2 = number[1];
const num3 = number[2];

if (num1 === num2 && num2 === num3) {
    console.log("¡Los números son iguales!");
} else {
    let mayor;
    let centro;
    let menor;

    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        if (num2 >= num3) {
            centro = num2;
            menor = num3;
        } else {
            centro = num3;
            menor = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        if (num1 >= num3) {
            centro = num1;
            menor = num3;
        } else {
            centro = num3;
            menor = num1;
        }
    } else {
        mayor = num3;
        if (num1 >= num2) {
            centro = num1;
            menor = num2;
        } else {
            centro = num2;
            menor = num1;
        }
    }

    console.log("El número mayor es: ", mayor);
    console.log("El número del centro es: ", centro);
    console.log("El número menor es: ", menor);

    console.log("Orden inverso: " + menor, centro, mayor);
}

//process.argv[2];
//Go to your terminal to run this script use: node script <1,2,3>