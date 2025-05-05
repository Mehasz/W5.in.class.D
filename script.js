//access the HTMl page with the document object. uses the .getelementById()
//method to return the html element that has the id "the Button"
//assigns it to a new const called mySpecialButton
//grabs the button thing we made and stores in the const so we can do stuff with it
const mySpecialButton = document.getElementById("theBUTTON");
//access the HTMl page with the document object. uses the .getelementById()
//method to return the html element that has the id "the result"
//assigns it to a new const called resultText
//grabs the <p> thing we made and stores in the const so we can do stuff with it
const resultText = document.getElementById("result");
//helloFunction updates the inner text inside of resultText to be a new random number.
const helloFunction = function () {
  resultText.innerText = `${Math.random()}`;
};
//use the .addeventListener() to call the helloFunction everytime we "click" the mySpecialButton button.
mySpecialButton.addEventListener("click", helloFunction);
