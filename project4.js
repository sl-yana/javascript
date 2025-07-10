let arr = [
  {
    dp: "https://images.unsplash.com/photo-1751915876415-e4635fdc93bd?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1751217052634-cd51e3519355?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1747861981371-1cbf84a78a0c?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    story:"https://images.unsplash.com/photo-1750668251415-bd40b8154f45?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1741802822447-a165460a7cfb?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    story:"https://plus.unsplash.com/premium_photo-1750780149002-609bb1c16b43?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1745636135872-b9f70b54dd95?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    story:"https://images.unsplash.com/photo-1728443814449-7a2ad4d86ec3?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  }
];

let stories = document.querySelector("#stories");
let clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
     <img id="${idx} "src="${elem.dp} alt=""></div>`;
});

stories.innerHTML = clutter;
    

stories.addEventListener("click", function (dets) {
  document.querySelector("#full").style.display = "block";
  document.querySelector("#full").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

});
