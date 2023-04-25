const form = document.getElementById("form");

function ErrorInput(data, id){
    const Divid = document.querySelector(`#item${id}`)
 if (Divid.childElementCount >= 3){
    return null
 } else {
    const p = document.createElement('p')
    p.innerText = `Você se esqueceu de preencher o seu ${data}`
    p.id = `paragrafo${id}`
    p.className = 'p'
    Divid.appendChild(p)
 }
}
function Excluir(id){
    const Divid = document.querySelector(`#item${id}`)
   if (Divid.childElementCount >= 3){
    const p = document.querySelector(`#paragrafo${id}`)
    Divid.removeChild(p)
   }else{
    return null
   }
}
 function verification(){
    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const telefone = document.getElementById("telefone");
    const email = document.getElementById("email");
    const dataNascimento = document.getElementById("data-nascimento");
    const escolaridade = document.getElementById("escolaridade");
    const endereco = document.getElementById("Endereco");
    const cidade = document.getElementById("Cidade");
    const pais = document.getElementById("pais");
    // Nome
    if (nome.value === ""){
        const icon = document.getElementById(`icon-1`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-x-circle-fill"></i>'
        nome.classList.remove("input-form-correct") 
        nome.classList.add("input-form-error")
        ErrorInput(nome.dataset.input,"1")
    }else {
        Excluir("1")
        const icon = document.getElementById(`icon-1`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-check-circle-fill"></i>'
        nome.classList.remove("input-form-error")
        nome.classList.add("input-form-correct") 
    }
    // Sobrenome
    if (sobrenome.value === ""){
         const icon = document.getElementById(`icon-2`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-x-circle-fill"></i>'
        sobrenome.classList.remove("input-form-correct")
        sobrenome.classList.add("input-form-error")
        ErrorInput(sobrenome.dataset.input,"2")
    }else {
        const icon = document.getElementById(`icon-2`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-check-circle-fill"></i>'
        Excluir("2")
        sobrenome.classList.remove("input-form-error")
        sobrenome.classList.add("input-form-correct")
    }
    // Telefone
    if (telefone.value === ""){
         const icon = document.getElementById(`icon-3`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-x-circle-fill"></i>'
        telefone.classList.remove("input-form-correct")
        telefone.classList.add("input-form-error")
        ErrorInput(telefone.dataset.input,"3")
    } else if (isNaN(telefone.value)){
         const icon = document.getElementById(`icon-3`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-x-circle-fill"></i>'
        Excluir("3")
        telefone.classList.remove("input-form-correct")
        telefone.classList.add("input-form-error")
    }
    else if (telefone.value){
        const icon = document.getElementById(`icon-3`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-check-circle-fill"></i>'
        Excluir("3")
        telefone.classList.remove("input-form-error")
        telefone.classList.add("input-form-correct")
    }
    // email
    if (email.value === ""){
         const icon = document.getElementById(`icon-4`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-x-circle-fill"></i>'
        email.classList.remove("input-form-correct")
        email.classList.add("input-form-error")
        ErrorInput(email.dataset.input,"4")
    }else {
        const icon = document.getElementById(`icon-4`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-check-circle-fill"></i>'
        Excluir("4")
        email.classList.remove("input-form-error")
        email.classList.add("input-form-correct")
    }
     // sexo
        sexo.classList.add("input-form-correct")
    // dataNascimento
    if (dataNascimento.value === ""){
         const icon = document.getElementById(`icon-5`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-x-circle-fill"></i>'
        dataNascimento.classList.remove("input-form-correct")
        dataNascimento.classList.add("input-form-error")
        ErrorInput(dataNascimento.dataset.input,"5")
    }else {
        const icon = document.getElementById(`icon-5`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-check-circle-fill"></i>'
        Excluir("5")
        dataNascimento.classList.remove("input-form-error")
        dataNascimento.classList.add("input-form-correct")
    }
    // Escolaridade
    if (escolaridade.value === ""){
         const icon = document.getElementById(`icon-6`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-x-circle-fill"></i>'
        escolaridade.classList.remove("input-form-correct")
        escolaridade.classList.add("input-form-error")
        ErrorInput(escolaridade.dataset.input,"6")
    }else {
        const icon = document.getElementById(`icon-6`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-check-circle-fill"></i>'
        Excluir("6")
        escolaridade.classList.remove("input-form-error")
        escolaridade.classList.add("input-form-correct")
    }
    // endereco
    if (endereco.value === ""){
         const icon = document.getElementById(`icon-7`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-x-circle-fill"></i>'
        endereco.classList.remove("input-form-correct")
        endereco.classList.add("input-form-error")
        ErrorInput(endereco.dataset.input,"7")
    }else {
        const icon = document.getElementById(`icon-7`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-check-circle-fill"></i>'
        Excluir("7")
        endereco.classList.remove("input-form-error")
        endereco.classList.add("input-form-correct")
    }
    // cidade
    if (cidade.value === ""){
         const icon = document.getElementById(`icon-8`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-x-circle-fill"></i>'
        cidade.classList.remove("input-form-correct")
        cidade.classList.add("input-form-error")
        ErrorInput(cidade.dataset.input,"8")
    }else {
        const icon = document.getElementById(`icon-8`)
        icon.innerHTML = icon.dataset.result.value = '<i class="bi bi-check-circle-fill"></i>'
        Excluir("8")
        cidade.classList.remove("input-form-error")
        cidade.classList.add("input-form-correct")
    }
    // pais
        pais.classList.add("input-form-correct")
   }
   function reset(){
    const nome = document.getElementById("nome");
    nome.classList.remove("input-form-correct")
    nome.value = ""
    const sobrenome = document.getElementById("sobrenome");
    sobrenome.classList.remove("input-form-correct")
    sobrenome.value = ""
    const telefone = document.getElementById("telefone");
    telefone.value = ""
    telefone.classList.remove("input-form-correct")
    const email = document.getElementById("email");
    email.value = ""
    email.classList.remove("input-form-correct")
    const dataNascimento = document.getElementById("data-nascimento");
    dataNascimento.classList.remove("input-form-correct")
    dataNascimento.value = ""
    const escolaridade = document.getElementById("escolaridade");
    escolaridade.classList.remove("input-form-correct")
    escolaridade.value = ""
    const endereco = document.getElementById("Endereco");
    endereco.classList.remove("input-form-correct")
    endereco.value = ""
    const cidade = document.getElementById("Cidade");
    cidade.value = ""
    cidade.classList.remove("input-form-correct")
    const pais = document.getElementById("pais");
    pais.classList.remove("input-form-correct")
    pais.value = ""
    const sexo = document.getElementById("sexo");
    sexo.classList.remove("input-form-correct")
    sexo.value = ""
  
   }

   function VerificationPromisse(){
    const nome = document.querySelector('#nome').value;
    const sobrenome = document.querySelector('#sobrenome').value;
    const telefone = document.querySelector('#telefone').value;
    const email = document.querySelector('#email').value;
    const escolaridade = document.querySelector('#escolaridade').value;
    const endereco = document.querySelector('#Endereco').value;
    const cidade = document.querySelector('#Cidade').value;
  
    if (nome === '' || sobrenome === '' || telefone === '' || email === '' || escolaridade === '' || endereco === '' || cidade === '') {
        return Promise.reject("Está faltando algum campo para preencher")
    } else if(isNaN(telefone)){
        return Promise.reject("Não é permitido letras no numero de telefone")
    }
     else {
        return Promise.resolve("Está faltando algum campo para preencher")
    }
   }

form.addEventListener('submit', async (ev) => {
   try{
     verification()
     await VerificationPromisse()
      reset()
    }catch(err){
        ev.preventDefault()
        console.log(err)
    }
})