const IName = document.getElementById("inpName");
const IDate = document.getElementById("inpDate");
const Iamt = document.getElementById("inpamt");
const submit = document.getElementById("add");
const tableDta = document.getElementById("tableDta");
let mydata = [];

// in load time
let tempdata = []; //temp array
tempdata = JSON.parse(localStorage.getItem("ExpData"));

if (tempdata) {
  mydata = tempdata;
  createTable(mydata);
}
// clicking add value

submit.addEventListener("click", function () {
  const Edata = {
    Name: IName.value,
    Date: IDate.value,
    Amount: Iamt.value,
  };
  mydata.push(Edata);
  localStorage.setItem("ExpData", JSON.stringify(mydata));
  createTable(mydata);
  IName.value = "";
  IDate.value = "";
  Iamt.value = "";
});

//  add table

function createTable(mydata) {
  var temp = ` <table>
  <tr>
    <th>Name</th>
    <th>Date</th>
    <th>Amount</th>
 
  </tr>

 
`;
  for (let i = 0; i < mydata.length; i++) {
    temp += `<tr>
    <td> ${mydata[i].Name} </td>
    <td> ${mydata[i].Date} </td>
    <td> ${mydata[i].Amount} </td>
    <td><button class="delete1" onclick="deleteval(${i})">X</button></td>
    </tr> `;
  }

  temp += `</table>`;
  console.log(temp);

  tableDta.innerHTML = temp;
}

// delete list

function deleteval(val) {
  for (let i = 0; i < mydata.length; i++) {
    if (i == val) {
      mydata.splice(i, 1);
    }
  }
  localStorage.setItem("ExpData", JSON.stringify(mydata));
  createTable(mydata);

  console.log("delete");
}
