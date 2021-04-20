document.getElementById("botaoEnviar").addEventListener("click" , validaFormulario )

function validaFormulario () {
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" &&
  document.getElementById("telefone").value != "" ){
   alert ("Prontinho! Agora você será notificada por email.")
  }else{
    alert ("preencha os campos vazios")
  }
}
