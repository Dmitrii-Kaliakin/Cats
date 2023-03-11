import { api } from "./api.js";
import { Card } from "./card.js";
import { updateLocalStorage } from "./index.js";

async function deleteValueObj(clickElementId, elementForDelete) {
  const elementObject = await api.getCatById(Number(clickElementId));
  await api.deleteCatById(clickElementId);
  updateLocalStorage(elementObject, { type: "DELETE_CAT" });
  elementForDelete.remove();
}

export function deleteLike() {
  document.addEventListener("click", function (e) {
    const clickElement = e.target.parentElement;
    if (clickElement.className === "card__delete") {
      const clickElementId =
        clickElement.parentElement.parentElement.querySelector(
          ".cat__id"
        ).innerText;
      const elementForDelete =
        clickElement.parentElement.parentElement.parentElement.querySelector(
          ".card"
        );
      deleteValueObj(clickElementId, elementForDelete);
    }
  });
}
