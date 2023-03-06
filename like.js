function addLike() {
  document.addEventListener("click", function (e) {
    let parentClickLikeElement = e.target.parentElement.parentElement;

    let NameElement =
      parentClickLikeElement.parentElement.querySelector(".cat__name");
    console.log(NameElement);
    if (
      parentClickLikeElement.className === "card__like card__like-block--hidden"
    ) {
      parentClickLikeElement.classList.remove("card__like-block--hidden");

      cats.forEach((catData) => {
        if (catData.name === NameElement.innerText) {
          catData.favourite = true;
          //   console.log(catData);
        }
      });
    } else if (parentClickLikeElement.className === "card__like") {
      parentClickLikeElement.classList.add("card__like-block--hidden");
      cats.forEach((catData) => {
        if (catData.name === NameElement.innerText) {
          catData.favourite = false;
          //   console.log(catData);
        }
      });
    }
  });
}
