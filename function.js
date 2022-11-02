let ratingNumber = 0;
const one = document.getElementById("oneMark");
const two = document.getElementById("twoMark");
const three = document.getElementById("threeMark");
const four = document.getElementById("fourMark");
const five = document.getElementById("fiveMark");
const sendButton = document.getElementById("submitButton");

let valueSelected = false;

one.addEventListener("click", function () {
  ratingNumber = 1;
  valueSelected = true;
});

two.addEventListener("click", function () {
  ratingNumber = 2;
  valueSelected = true;
});

three.addEventListener("click", function () {
  ratingNumber = 3;
  valueSelected = true;
});

four.addEventListener("click", function () {
  ratingNumber = 4;
  valueSelected = true;
});

five.addEventListener("click", function () {
  ratingNumber = 5;
  valueSelected = true;
});


sendButton.addEventListener("click", function() {
  console.log(ratingNumber);
  if (valueSelected == true) {
    document.getElementById("userRatingLabel").innerHTML = `You selected ${ratingNumber} out of 5`;
  document.querySelector(".generalBox").style.display = "flex";
  document.querySelector(".ratingGeneralBox").style.display = "none";
  }
  
});

