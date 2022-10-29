console.log("HELLO KANTOR NIE BEMA")


const formElement = document.querySelector(".js-F");

const amountElement = document.querySelector(".js-A");

const resultElement = document.querySelector(".js-R");

const currencyElement = document.querySelector(".js-WC");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = (amount / currency);
    resultElement.innerText = result.toFixed(2);
});

