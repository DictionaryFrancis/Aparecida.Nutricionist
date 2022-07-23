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