function convert() {

    const userInput = document.getElementById('userInput').value;
    const unitValue = document.getElementById('unit-select').value;
    const metersToKm = unitValue === "metersToKm";
    const result = document.querySelector('span');

    if (metersToKm === true) {
        result.innerHTML = userInput / 1000;
    } else {
        result.innerHTML = userInput * 1000;
    }

}