console.log("HELLO KANTOR NIE BEMA")
let formElement = document.querySelector(".js-F");
let amountElement = document.querySelector(".js-A");
let resultElement = document.querySelector(".js-R");
let currencyElement = document.querySelector(".js-WC");
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = (amount / currency);
    resultElement.innerText = result.toFixed(2);
}); 