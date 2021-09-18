import "../scss/app.scss";
window.addEventListener("DOMContentLoaded", () => {

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];

  const newArray = numbersArray.filter(e => e % 2 ===0);
  
  newArray.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML = element;
    ul.appendChild(li);
  });
});
