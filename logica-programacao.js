function somarMultiplosDeTresOuCincoAbaixoDeMil() {
  let soma = 0;
  for (let numeroAtual = 1; numeroAtual < 1000; numeroAtual++) {
    if (numeroAtual % 3 === 0) soma += numeroAtual;
    else if (numeroAtual % 5 === 0) soma += numeroAtual;
  }
  return soma;
}

let somatoriaNumerosMultiplosDeTresOuCincoAbaixoDeMil =
  somarMultiplosDeTresOuCincoAbaixoDeMil();

console.log(
  "A soma de todos os números naturais abaixo de 1000 múltiplos de 3 ou 5 é: " +
    somatoriaNumerosMultiplosDeTresOuCincoAbaixoDeMil
);
