var myHeading = document.querySelector("h1");/*querySelector finds the first instance of h1 in the document*/ 
myHeading.textContent = "Join the Night's Watch!"; //this heading's textContent property is then modified

//Defining a fucntion called multiply
document.querySelector("a").onclick = function() {  
  //We defined the function such that if any link is clicked, the following statement will be printed out
  
  alert('Gods, I was strong then!');

  /* when the first instance of a link is clicked, the statement will be printed out
  document scans through the document, querySelector selects the element (which is
  the whole HTML file in this case, .onclick prompts the querySelector to do the selection when the selected object
  is clicked (could be the whle HTML file, could be just h1), and the alert statement prints out the statement*/    
    
}


var myVows =document.querySelector(".vows")
myVows.onclick = function() {


alert("You are now a man of the Night's Watch!");
myVows.textContent= "HONOURABLE FOOL!"; //Link disapparates


  
}

var myImage = document.querySelector("img");
/*a variable called myImage stores the first instance of img, which is the sigil*/

myImage.onclick = function() {  
  /*Here, we define what clicking on the image variable will do. We are defining a function, just like how we make
  custom methods in Java! The only difference is, the function/method will only be triggered when we click (.onclick)
  on a certain element (the first img, in this case).
  Does the function have an identifier, or is its identifier the fact that it will be triggered by a click to myImage?*/
   
  var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sigil.jpg') {
      myImage.setAttribute ('src','images/kingsguard.png');
    } else {
      myImage.setAttribute ('src','images/sigil.jpg');
    }

    /* A variable called mySrc retrieves the value of the image's src attribute
    With a conditional, we check whether that retrieved src attribute is equal to a certain jpg file loctaed in the images file
    If it is, I replace the src attribute with another image, changing the image that is displayed in the HTML file
    If the src attribute of that very first iage located by querySelector is not equal to sigil.jpg, then I set it
    to sigil.jpg */
}


var myButton = document.querySelector('button'); //finding the newly created script for the button
var myHeading = document.querySelector('h1');

/* Takes the references to the newly added button and the first h1*/

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName); //setter
  myHeading.textContent = "Do you want to join the Night's Watch, " + myName + " ? ";
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name'); //getter
  myHeading.textContent = "Welcome to the Night's Watch, " + storedName;
}
  
myButton.onclick = function() {
  setUserName();
}
