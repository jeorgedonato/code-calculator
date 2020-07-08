let calculator = document.querySelector(".calculator");
// console.log(buttons)
let numArr = [];
calculator.addEventListener("click", (e) => {
  // e.preventDefault();
  let target = e.target;
  if (target.matches(".btn-calc")) {
    console.log(target)
  }
});