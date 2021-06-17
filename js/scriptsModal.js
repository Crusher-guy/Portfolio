// Get the modal from portólio line 468
var modal = document.getElementById('modal');

// Get the button that opens the modal line 336
var btn = document.getElementById('saiba_mais');

// Get the <span> element that closes the modal line 472
var span = document.getElementsByClassName('fechar')[0];

// When the user clicks on the button, open the modal line 467
btn.onclick = function () {
  document.querySelector('.modal-overlay').classList.add('active');
};

// When the user clicks on <span> (x), close the modal line 467
span.onclick = function () {
  document.querySelector('.modal-overlay').classList.remove('active');
};

// When user clicks anywhere outside of the modal, close it
// span.addEventListener('click', function (event) {
//   if (event.target == modal) {
//     document.querySelector('.modal-overlay').classList.remove('active');
//   }
// });

window.onclick = function(event) {
  if (event.target == modal) {
    document.querySelector('.modal-overlay').classList.remove('active');
  }
  if (event.target == modal) {
    document.querySelector('.modal-overlay').classList.remove('active');
  }
}


//  Modal saiba mais portfolio 1

// Get the modal from portólio line 468
var modal = document.getElementById('modal-card2');

// Get the button that opens the modal line 336
var btn = document.getElementById('saiba_mais_portfolio_card1');

// Get the <span> element that closes the modal line 472
var span = document.getElementsByClassName('fechar-card2')[0];

// When the user clicks on the button, open the modal line 467
btn.onclick = function () {
  document.querySelector('.modal-overlay-card2').classList.add('active');
};

// When the user clicks on <span> (x), close the modal line 467
span.onclick = function () {
  document.querySelector('.modal-overlay-card2').classList.remove('active');
};

// When user clicks anywhere outside of the modal, close it
// span.addEventListener('click', function (event) {
//   if (event.target == modal) {
//     document.querySelector('.modal-overlay-card2').classList.remove('active');
//   }
// });

window.onclick = function(event) {
  if (event.target == modal) {
    document.querySelector('.modal-overlay-card2').classList.remove('active');
  }
  if (event.target == modal) {
    document.querySelector('.modal-overlay-card2').classList.remove('active');
  }
}


