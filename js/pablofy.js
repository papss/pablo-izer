// perform functions AFTER page has finished loading:
window.onload = function() {

  topLeft     = document.getElementById("life-of-input");
  topRight    = document.getElementById("joseph-input");
  bttmLeft    = document.getElementById("left-input");
  bttmRight   = document.getElementById("right-input");

  theLifeOf   = document.querySelector('#the-life-of li').innerHTML;
  nameBox     = document.querySelector('#joseph li').innerHTML;
  whichLeft   = document.querySelector('#left li').innerHTML;
  whichRight  = document.querySelector('#right li').innerHTML;

  button      = document.getElementById('pablofy');

  topLeft.onkeyup = function() {
    document.querySelector('#the-life-of li').innerHTML = topLeft.value;
  }

  topRight.onkeyup = function() {
    document.querySelector('#joseph li').innerHTML = topRight.value;
  }

  bttmLeft.onkeyup = function() {
    document.querySelector('#left li').innerHTML = bttmLeft.value;
  }

  bttmRight.onkeyup = function() {
    document.querySelector('#right li').innerHTML = bttmRight.value; 
  }

  button.onclick = function() {
    console.log("you clicked the button");
    document.querySelector('#the-life-of li').innerHTML = "hi there";
  }

}
