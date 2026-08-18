let numero = 5;
console.log(numero); //5

numero = numero +1;
console.log(numero); //6

numero += 1;
console.log(numero); //7

numero ++; //1
// ++numero; 
console.log(numero); //8


for (let i = 0; i<5; i++){
    console.log("Número:", i);
}

let contador = 0;

while(contador < 5){

    console.log("(while) Número:", contador);

    contador ++;
}

let contadorDo = 0;
do{

    console.log("(do..while)Número:", contadorDo);
    contadorDo += 1;
    
} while(contadorDo < 5);
