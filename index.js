//connect Js and HTML
    //button > JS
    const btnEl = document.getElementById("convert-btn")
    //<p> > JS
    const lengthEl = document.getElementById("length-el")
    const volumeEl = document.getElementById("volume-el")
    const massEl = document.getElementById("mass-el")

//set variables for conversions
    //1 meter = 3.281 feet
    const meterConversion = 3.281
    //1 liter = 0.264 gallon
    const literConversion = 0.264
    //1 kilogram = 2.204 pound
    const massConversion = 2.204


btnEl.addEventListener("click", function() {
    //Length Conversion
    const inputValue = document.getElementById("number-input").value

    lengthEl.innerHTML =`${inputValue} meters = ${(inputValue * meterConversion).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / meterConversion).toFixed(3)} meters`

    volumeEl.innerHTML =`${inputValue} liters = ${(inputValue * literConversion).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / literConversion).toFixed(3)} liters`

    massEl.innerHTML =`${inputValue} kilos = ${(inputValue * massConversion).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / massConversion).toFixed(3)} kilos`
})