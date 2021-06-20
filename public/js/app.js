// Armazenando os dados digitados no formulário nas várias correspondentes
const contactForm = document.querySelector('.contact-form');
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let message = document.getElementById('message');

// Função para evitar que a página seja recarregada quando o botao "enviar" for clicado.
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Construção de um objeto JS
  let formData = {
    name: nome.value,
    email: email.value,
    message: email.value,
  };

  // Depois de criar um objeto com os dados digitados no formulário, enviarei para o backend com AJAX
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/'); // Primeiro argumento é o método POST, usado enviar os dados. O segundo argumento é '/' é a página de onde os dados serão tirados. 
  xhr.setRequestHeader('content-type', 'aplication/JSON'); // aplication/json é a melhor forma de converter os dados e enviar, considerando que os dados capturados foi inseridos no objeto acima. 
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == "sucess"){
    alert ('Email enviado com sucesso! Entrarei em contato em breve.');
    nome.value = ''; // Este comando limpa o campo depois de o botão "enviar" ser clicado. 
    email.value = ''; // Este comando limpa o campo depois de o botão "enviar" ser clicado. 
    message.value = ''; // Este comando limpa o campo depois de o botão "enviar" ser clicado. 
  }else{
    alert('Algo não saiu como esperado e seu e-mail não foi enviado. Se preferir faça contato pelo número whatsapp disponível na página')
  }
}

// Enviando os dados da variável formData para o backend como string. 
xhr.send(JSON.stringify(formData));

})

