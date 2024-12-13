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
  let x = document.forms["myForm"]["wishes"].value;
  let y = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Please fill out your wishes");
    return false;
  } else if (y == "") {
    alert("Please fill out your name");
    return false;
  }
}
