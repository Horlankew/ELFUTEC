const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome != "" && altura != "" && peso != "") {
    const valorIMC = (peso / (altura * altura)).toFixed(1);
    let resultadoIMC = "";

    if (valorIMC < 18.5) {
      resultadoIMC = "você está abaixo do peso.";
    } else if (valorIMC < 25) {
      resultadoIMC = "você está com peso ideal.";
    } else if (valorIMC < 30) {
      resultadoIMC = "você está levemente acima do peso.";
    } else if (valorIMC < 35) {
      resultadoIMC = "você está com obesidade grau 1º.";
    } else if (valorIMC < 40) {
      resultadoIMC = "você está com obesidade grau 2º.";
    } else {
      resultadoIMC = "você está com obesidade grau 3º.";
    }
    resultado.textContent = valorIMC + " " + resultadoIMC;
  } else {
    resultado.textContent = "Preencha todos os campos obrigatórios!";
  }
}

// const imc = () => {
//   const nome = document.getElementById("nome").value;
//   const altura = document.getElementById("altura").value;
//   const peso = document.getElementById("peso").value;
//   const resultado = document.getElementById("resultado").value;

//   if (nome != "" && altura != "" && peso != "") {
//     const valorIMC = (peso / (altura * altura)).toFixed(1);
//     let resultadoIMC = "";

//     if (valorIMC < 18.5) {
//       resultadoIMC = "você está abaixo do peso.";
//     } else if (valorIMC < 25) {
//       resultadoIMC = "você está com peso ideal.";
//     } else if (valorIMC < 30) {
//       resultadoIMC = "você está levemente acima do peso.";
//     } else if (valorIMC < 35) {
//       resultadoIMC = "você está com obesidade grau 1º.";
//     } else if (valorIMC < 40) {
//       resultadoIMC = "você está com obesidade grau 2º.";
//     } else {
//       resultadoIMC = "você está com obesidade grau 3º.";
//     }
//     resultado.textContent = valorIMC + " " + resultadoIMC;
//   } else {
//     resultado.textContent = "Preencha todos os campos obrigatórios!";
//   }
// };
