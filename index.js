document.querySelector(".img-1").addEventListener("click",expandCard);
document.querySelector(".img-2").addEventListener("click",expandCard);
document.querySelector(".img-3").addEventListener("click",expandCard);
document.querySelector(".img-4").addEventListener("click",expandCard);
document.querySelector(".img-5").addEventListener("click",expandCard);
document.querySelector(".reset-button").addEventListener("click",reset);

function expandCard(e){
    // console.log(e.target.className);
    // console.log(e.target.id);
    //
    // console.log(e.target.classList);
    let activeCard = document.querySelector(".active");
    if(activeCard !== null)
      activeCard.classList.remove("active");
    e.target.classList.add("active");
}

function reset(e) {
  let activeCard = document.querySelector(".active");
  activeCard.classList.remove("active");
}
