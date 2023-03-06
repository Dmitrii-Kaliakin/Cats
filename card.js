class Card {
  #data;
  #selectorTemplate;
  #element;
  #handleClickCatImage;
  #btnOpenImage;

  #getTemplate() {
    const template = document
      .querySelector(this.#selectorTemplate)
      .content.querySelector(".card");
    return template;
  }

  constructor(data, selectorTemplate, handleClickCatImage) {
    this.#data = data;
    this.#selectorTemplate = selectorTemplate;
    this.#handleClickCatImage = handleClickCatImage;
  }

  getElement() {
    this.#element = this.#getTemplate().cloneNode(true);
    const catNameElement = this.#element.querySelector(".cat__name");
    const catAgeElement = this.#element.querySelector(".cat__age");
    const catRateElement = this.#element.querySelector(".cat__rate");
    const cardImageElement = this.#element.querySelector(".card__image");
    const cardLikeElement = this.#element.querySelector(".card__like");
    const btnOpenImage = this.#element.querySelector(".card__zoom");

    catNameElement.textContent = this.#data.name;
    catAgeElement.textContent = this.#data.age;
    catRateElement.textContent = this.#data.rate;
    cardImageElement.src = this.#data.img_link;
    if (!this.#data.favourite) {
      cardLikeElement.classList.add("card__like-block--hidden");
    }

    btnOpenImage.addEventListener("click", () => {
      this.#handleClickCatImage(this.#data.img_link);
    });
    return this.#element;
  }
}
