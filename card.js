export class Card {
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
    const catIdElement = this.#element.querySelector(".cat__id");
    const catDescriptionElement =
      this.#element.querySelector(".cat_description");
    const btnOpenImage = this.#element.querySelector(".card__zoom");

    catIdElement.textContent = this.#data.id;
    catNameElement.textContent = this.#data.name;
    catAgeElement.textContent = this.#data.age;
    catRateElement.textContent = this.#data.rate;
    cardImageElement.src = this.#data.image;
    catDescriptionElement.textContent = this.#data.description;
    if (!this.#data.favorite) {
      cardLikeElement.classList.add("card__like-block--hidden");
    }

    btnOpenImage.addEventListener("click", () => {
      this.#handleClickCatImage(this.#data.image);
    });
    return this.#element;
  }
}
