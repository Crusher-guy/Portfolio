// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById('saiba_mais');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('fechar')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  document.querySelector('.modal-overlay-certificado').classList.add('active');
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  document.querySelector('.modal-overlay-certificado').classList.remove('active');
};

// When user clicks anywhere outside of the modal, close it
// span.addEventListener('click', function (event) {
//   if (event.target == modal) {
//     document.querySelector('.modal-overlay-certificado').classList.remove('active');
//   }
// });

window.onclick = function(event) {
  if (event.target == modal) {
    document.querySelector('.modal-overlay-certificado').classList.remove('active');
  }
  if (event.target == modal) {
    document.querySelector('.modal-overlay-certificado').classList.remove('active');
  }
}
