var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelector("#primeiro-paciente");
var pacientePeso = paciente.querySelector(".info-peso");

var peso = pacientePeso.textContent;

var pacienteAltura = paciente.querySelector(".info-altura");

var altura = pacienteAltura.textContent;
//---IMC CALCULATION---//
var imcPaciente = paciente.querySelector(".info-imc")

var imc = peso/(altura * altura)

imcPaciente.textContent = imc


//----Validacao---//
var pesoValido = true
var alturaValida = true

if (peso <= 0 || peso >= 200) {
    pesoValido = false
   imcPaciente.textContent = "Peso Invalido!"
}
if (altura <= 1.50 || altura >= 2.50) {
    alturaValida = false
   imcPaciente.textContent = "Altura Invalida"
}
if (pesoValido && alturaValida) {  
    var imcPaciente = peso/(altura * altura)
    imcPaciente.textContent = imc
} else {
    imcPaciente.textContent = "Altura e/ou peso inválidos!"
}
