let a = 5;
let b = 10;
console.log("A soma é ", a + b);
console.log("A soma é ", a * b);

let mensagem = "Olá, mundo!";
console.log(mensagem);

//  let texto = "A soma é: ";
//  console.log(texto + a + b); 
//  Juntou tudo como se fosse string - js é mais permissivo - Como resolver ? Matemática e texto ao mesmo tempo

let texto = "A soma é: ";
console.log(texto + (a + b));
