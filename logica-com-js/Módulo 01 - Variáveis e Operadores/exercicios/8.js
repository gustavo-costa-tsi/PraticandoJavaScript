//Dado o valor inicial P de uma aplicação e a taxa de juros i, calcule o montante após um período. (Juros Simples)
let c=1000;
let i=15/100;
let t=12;

let juros = c*i*t;
let montante = c+juros;

console.log("O total de rendimento dessa aplicação foi de: R$", juros);
console.log("O montante dessa aplicação após o período t foi de: R$", montante);