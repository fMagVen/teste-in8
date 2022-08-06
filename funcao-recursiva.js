function descobrirMMCdeDoisTresDez(possivelNumero) {
  if (possivelNumero % 2 !== 0) {
    return descobrirMMCdeDoisTresDez(possivelNumero + 1);
  } else if (possivelNumero % 3 !== 0) {
    return descobrirMMCdeDoisTresDez(possivelNumero + 1);
  } else if (possivelNumero % 10 !== 0) {
    return descobrirMMCdeDoisTresDez(possivelNumero + 1);
  } else return possivelNumero;
}

let numeroComeco = 1;

let numeroEncontrado = descobrirMMCdeDoisTresDez(numeroComeco);

console.log(
  "O menor número inteiro divisível por 2, 3 e 10 é: " + numeroEncontrado
);
