const inputlist = document.getElementById("inputlist");
const content = document.getElementById("content");
const submit = document.getElementById("add");
const innerdiv = document.getElementsByClassName("innerdiv");
const P = document.getElementById("P1");

let mydata = [];

let tempdata = [];
tempdata = JSON.parse(localStorage.getItem("note"));
if (tempdata) {
  mydata = tempdata;
  createNote(mydata);
}

submit.addEventListener("click", () => {
  if (!inputlist.value) {
    return;
  }
  const myNote = {
    Note: inputlist.value,
  };
  mydata.push(myNote);
  localStorage.setItem("note", JSON.stringify(mydata));
  createNote(mydata);
  inputlist.value = "";
});

function createNote(mydata) {
  var noteA = "";

  for (let i = 0; i < mydata.length; i++) {
    noteA += `<div> Note ${i + 1} <div id=${i} class="innerdiv"> ${
      mydata[i].Note
    }</div>
      <button class="view-details" id="${i}" onclick=Modal(${i})>view details</button></div>`;
  }
  console.log(noteA);

  content.innerHTML = noteA;
}

function Modal(ele) {
  //ele.innerHTML = "abc.......................................";
  modal.style.display = "block";
  P.textContent = innerdiv[ele].textContent;
  console.log(innerdiv[0].textContent);
  console.log(P.textContent);
}

// modal script

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
