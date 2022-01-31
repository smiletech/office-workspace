const Block = document.getElementsByClassName("block");
const msg = document.getElementById("msg");
let Imgarr = ["1.jpeg", "2.jpeg", "3.jpeg"];
let count = 0;
let pre;

function showImg(val) {
  let x = Math.floor(Math.random() * 3);
  count++;
  if (count == 3) {
    msg.innerText = "Game Over";
    alert("opps your Game Over");
    location.reload();
  } else {
    if (count == 1) {
      pre = x;
    }
    Block[val].innerHTML = `<img src="./${Imgarr[x]}" alt="action" />`;

    if (pre == x && count > 1) {
      msg.innerText = " you win";
      return;
    } else if (count > 1) msg.innerText = "you lose Game";
  }
}
