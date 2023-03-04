class Popup {
  #popupElement;
  #classPopup;
  #handleEscUp = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  constructor(classPopup) {
    this.#popupElement = document.querySelector(`.${classPopup}`);
    this.#classPopup = classPopup;
  }

  open() {
    this.#popupElement.classList.add(`${this.#classPopup}_active`);
    document.addEventListener("keyup", this.#handleEscUp);
  }

  close() {
    this.#popupElement.classList.remove(`${this.#classPopup}_active`);
    document.removeEventListener("keyup", this.#handleEscUp);
  }

  setEventListener() {
    this.#popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains(this.#classPopup) ||
        !!evt.target.closest(".popup__close")
      ) {
        this.close();
      }
    });
  }
}
