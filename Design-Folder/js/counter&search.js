// search books
function searchBook() {
  let box = document.getElementsByClassName("book-hidden");
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("book");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      console.log(box);

      box[i].style.display = "none";
    } else {
      box[i].style.display = "list-item";
    }
  }
}

// counter
// var counter = 0;
if (localStorage.getItem("counter") === NaN) {
  var counter = 0;
} else {
  var counter = localStorage.getItem("counter");
  const spanCounter = document.getElementById("counter");
  const container = document.getElementById("count");
  spanCounter.innerHTML = counter;
  container.style.color = "white";
  spanCounter.style.color = "white";
  container.style.backgroundColor = "#cc0f21";
  spanCounter.style.backgroundColor = "#cc0f21";
}
console.log(localStorage.getItem("counter"));

function storageCounter() {
  localStorage.setItem("counter", ++counter);
  const spanCounter = document.getElementById("counter");
  const container = document.getElementById("count");

  spanCounter.innerHTML = counter;
  container.style.color = "white";
  spanCounter.style.color = "white";
  container.style.backgroundColor = "#cc0f21";
  spanCounter.style.backgroundColor = "#cc0f21";
}
