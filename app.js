init();
function init() {
  document.querySelector(".form__bill").value = 0;
  document.querySelector(".form__tip").value = 0;
  document.querySelector(".card__feedback").value = "&nbsp;";
}

function processItems() {
  const bill_value = document.querySelector(".form__bill").value;
  const tip_value = document.querySelector(".form__tip").value;

  bill_value == 0 || tip_value == 0
    ? (document.querySelector(".card__feedback").textContent =
        "Please, enter valid amounts")
    : calcItems();

  function calcItems() {
    const tip = ((tip_value / 100) * bill_value).toFixed(2);
    const total = Number(bill_value) + Number(tip);
    return (document.querySelector(
      ".card__feedback"
    ).textContent = `The tip adds ${tip} to the bill, having to pay a total amount of ${total}`);
  }
}

document
  .querySelector(".calc__btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    processItems();
  });
