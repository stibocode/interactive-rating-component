let numberRating=0;

function printNumber(number) {
  document.write(number);
}

document.getElementById('oneMark').addEventListener('click', function() {
  numberRating = 1;
});

document.getElementById('twoMark').addEventListener('click', function() {
  numberRating = 2;
  // console.log(numberRating);
});

document.getElementById('threeMark').addEventListener('click', function() {
  numberRating = 3;
});

document.getElementById('fourMark').addEventListener('click', function() {
  numberRating = 4;
});

document.getElementById('fiveMark').addEventListener('click', function() {
  numberRating = 5;
});



document.getElementById('submitButton').addEventListener("click", function() {
  // window.open('sent.html', '_self');
  location.href= 'sent.html';
  console.log(numberRating);
  // printNumber(numberRating);
  // window.focus();
  // return numberRating;
  
});

document.getElementById('userRatingLabel').innerHTML = `achu ${numberRating}`;











