var button = document.querySelector(".hotel-search__open-search-button");
var popup = document.querySelector(".modal");
var form = popup.querySelector("form");
var arrivalDate = popup.querySelector("[name=arrival-date]");
var departureDate = popup.querySelector("[name=departure-date]");
var isStorageSupport = true;
var storage = "";

document.querySelector(".no-js").classList.remove("no-js");

try {
  storage = localStorage.getItem("arrival-date");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");
  if (storage) {
      arrivalDate.value = storage;
      departureDate.focus();
    } else {
      arrivalDate.focus();
    }
});

form.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value) {
    evt.preventDefault();
    popup.classList.toggle("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("arrival-date", arrivalDate.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
