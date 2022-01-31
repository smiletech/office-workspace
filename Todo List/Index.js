const InputValue = document.getElementById("inputlist");
const submit = document.getElementById("submit");
const Clear = document.getElementById("Clear");
const ul = document.getElementById("myList");
// let valuelist = InputValue.value;
let DataStore = [];

let localst = JSON.parse(localStorage.getItem("DataStore"));
if (localst) {
  DataStore = localst;
  addList(DataStore);
}
// clear locallist

Clear.addEventListener("click", () => {
  localStorage.clear("DataStore");
  DataStore = [];
  addList(DataStore);
});

// submit button
submit.addEventListener("click", function () {
  DataStore.push(InputValue.value);
  localStorage.setItem("DataStore", JSON.stringify(DataStore));
  addList(DataStore);
  InputValue.value = "";
});
function addList(DataStore) {
  var listA = "";
  for (let i = 0; i < DataStore.length; i++) {
    listA += `<li> ${DataStore[i]}   <button onclick="deleteval(${i})" style="padding : 5px; margin: 10px; background-color: beige; color:rgb(173, 12, 12); font-size: 1.rem;">X</botton> </li> `;
  }
  ul.innerHTML = listA;
}

const deleteval = (val) => {
  for (let i = 0; i < DataStore.length; i++) {
    if (i == val) {
      DataStore.splice(i, 1);
    }
  }
  localStorage.setItem("DataStore", JSON.stringify(DataStore));
  addList(DataStore);
};

//<button style="background-color: beige; color:rgb(173, 12, 12); font-size: 1.rem;">X</botton>
