/**
 *  Luiz Otávio Miranda tem 30 AnalyserNode, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.925924925
 * Luiz Otávio nascem em 1980
 * */

const nome = "Luiz Otavio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const altura = 1.8;
const ano = new Date();
let hoje = ano.getFullYear();
let imc = 0; // peso / (altura * altura)
let anoNascimento = 0;

imc = Math.round(peso / (altura * altura));
anoNascimento = hoje - idade;
console.log(imc, anoNascimento);
