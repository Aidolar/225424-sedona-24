var button = document.querySelector(".hotel-search__open-search-button");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".hotel-search__open-search-button");
var arrivalDate = popup.querySelector("[name=arrival-date]");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  arrivalDate.focus();
});
close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.toggle("modal-show");
});
