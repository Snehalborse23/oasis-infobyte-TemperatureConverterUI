document.addEventListener("DOMContentLoaded", function () {
  const temperatureInput = document.getElementById("temperatureInput");
  const unitSelect = document.getElementById("unitSelect");
  const convertButton = document.getElementById("convertButton");
  const result = document.getElementById("result");

  convertButton.addEventListener("click", function () {
    const temperature = parseFloat(temperatureInput.value);
    const selectedUnit = unitSelect.value;

    if (isNaN(temperature)) {
      result.textContent = "Please enter a valid temperature.";
      return;
    }

    let convertedTemp, convertedUnit;

    if (selectedUnit === "celsius") {
      convertedTemp = temperature;
      convertedUnit = "Celsius";
    } else if (selectedUnit === "fahrenheit") {
      convertedTemp = (temperature * 9 / 5) + 32;
      convertedUnit = "Fahrenheit";
    } else if (selectedUnit === "kelvin") {
      convertedTemp = temperature + 273.15;
      convertedUnit = "Kelvin";
    }

    result.textContent = `Converted temperature: ${convertedTemp.toFixed(2)} ${convertedUnit}`;
  });
});
