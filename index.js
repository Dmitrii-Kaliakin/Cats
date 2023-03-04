const cardsContainer = document.querySelector(".cards");
const btnOpenPopup = document.querySelector(".btn");
const popupAdd = new Popup("popup");
const formCatAdd = document.querySelector("#popup-form-add");

function serializeForm(elements) {
  const formData = {};

  elements.forEach((input) => {
    if (input.type === "submit" || input.type === "button") return;
    if (input.type === "checkbox") {
      formData[input.name] = input.checked;
    }
    if (input.type !== "checkbox") {
      formData[input.name] = input.value;
    }
  });

  return formData;
}

function handleFormAddCat(e) {
  e.preventDefault();
  const elementsFormCat = [...formCatAdd.elements];
  const formData = serializeForm(elementsFormCat);
  console.log(formData);
  const newElement = new Card(formData, "#card-template");
  cardsContainer.prepend(newElement.getElement());

  popupAdd.close();
}

formCatAdd.addEventListener("submit", handleFormAddCat);

btnOpenPopup.addEventListener("click", (e) => {
  e.preventDefault();
  popupAdd.open();
});

cats.forEach((catData) => {
  const newElement = new Card(catData, "#card-template");
  cardsContainer.append(newElement.getElement());
});

popupAdd.setEventListener();

addLike();
console.log(cats);
