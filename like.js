import { api } from "./api.js";
import { updateLocalStorage } from "./index.js";

async function updateValueObj(key, value, clickElementId) {
  const elementObject = await api.getCatById(Number(clickElementId));
  elementObject[key] = value;
  await api.updateCatById(clickElementId, elementObject);
  updateLocalStorage(elementObject, { type: "EDIT_CAT" });
}

export function addLike() {
  document.addEventListener("click", function (e) {
    const clickElement = e.target.parentElement;

    if (clickElement.className === "card__like card__like-block--hidden") {
      clickElement.classList.remove("card__like-block--hidden");
      const clickElementId =
        clickElement.parentElement.querySelector(".cat__id").innerText;
      updateValueObj("favorite", true, clickElementId);
    } else if (clickElement.className === "card__like") {
      clickElement.classList.add("card__like-block--hidden");
      const clickElementId =
        clickElement.parentElement.querySelector(".cat__id").innerText;
      updateValueObj("favorite", false, clickElementId);
    }
  });
}
