let stats = document.querySelector("h4");
let btn = document.querySelector("#add");
let check = 0;
btn.addEventListener("click", function () {
  if (check == 0) {
    stats.innerHTML = "Friends";
    stats.style.color = "green";
    btn.innerHTML = "Remove Friend";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    check = 1;
  } else {
    stats.innerHTML = "Stranger";
    stats.style.color = "red";
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = " cadetblue";
    btn.style.color = "white";
    check = 0;
  }
});
