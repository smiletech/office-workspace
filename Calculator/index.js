const Num = document.getElementById("textarea");

let pre = 0,
  next = 0,
  op = "";
let count = 0;

function showText(ele) {
  let val = ele.textContent;
  if (count == 0) {
    pre += val;
    console.log(pre + " " + next);
  }

  if (count > 1) {
    next += val;
  }
  count++;
  console.log(pre + " " + next);
}

//
function MText(ele) {
  Num.textContent = "";
}
//
function showOPt(ele) {
  if (count == 0) return;
  op = ele.textContent;
  Num.textContent = op;
  count++;
  console.log(op + " " + count);
}

function showResult(ele) {
  let prev = JSON.parse(pre);
  let nextv = JSON.parse(next);
  let result = eval(`${prev} ${op} ${nextv} `);
  console.log(result);
  Num.textContent = "result";
}
