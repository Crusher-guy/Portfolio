
const contactForm = document.querySelector(".contact-form");

// Função para evitar que a página seja recarregada quando o botao "enviar" for clicado.
contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log("enviar clicado")
})

