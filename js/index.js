var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

    for (let index = 0; index < pacientes.length; index++) {

        paciente = pacientes[index]
        
        var pacientePeso = paciente.querySelector(".info-peso");

        var peso = pacientePeso.textContent;

        var pacienteAltura = paciente.querySelector(".info-altura");

        var altura = pacienteAltura.textContent;
        //---IMC CALCULATION---//
        var imcPaciente = paciente.querySelector(".info-imc")


        //----Validacao---//
        var pesoValido = true
        var alturaValida = true

        if (peso <= 0 || peso >= 200) {
            pesoValido = false
            imcPaciente.textContent = "Peso Invalido!"
            paciente.classList.add("paciente-invalido")
        }
        if (altura <= 1.50 || altura >= 2.50) {
            alturaValida = false
            imcPaciente.textContent = "Altura Invalida"
            paciente.classList.add("paciente-invalido")
        }
        if (pesoValido && alturaValida) {  
            var imc = peso/(altura * altura)
            imcPaciente.textContent = imc.toFixed(2)
        } else {
            imcPaciente.textContent = "Altura e/ou peso inválidos!"
            paciente.classList.add("paciente-invalido")
        }
}
//----Button

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona")
    
    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value

    var pacienteTr = document.createElement("tr")
    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

});