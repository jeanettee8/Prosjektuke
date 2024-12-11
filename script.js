// var button1 = document.getElementById("number1");
// var button2 = document.getElementById("number2");
// var button3 = document.getElementById("number3");
// if (Unsure.checked) {
//   radio == Naughty;
// }

// function "myFunction"()
// alert("You have pressed the enter key, use submit button instead");
// return false;

// onkeydown="if(event.keyCode = 13)myFunction";

// if (firstInput)==!""(return false;);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function validateForm() {
  let x = document.forms["myForm"]["firstInput"].value;
  let y = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Wishes must be filled out");
    return false;
  } else if (y == "") {
    alert("Fill out your name");
    return false;
  }
}
