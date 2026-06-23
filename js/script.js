const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");

const lengthSlider =
    document.getElementById("lengthSlider");

const lengthValue =
    document.getElementById("lengthValue");

lengthSlider.addEventListener("input", function() {

    lengthValue.textContent =
        lengthSlider.value;

});

generateBtn.addEventListener("click", function() {

    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let password = "";

    const passwordLength =
        parseInt(lengthSlider.value);

    for (let i = 0; i < passwordLength; i++) {

        const randomIndex =
            Math.floor(Math.random() * chars.length);

        password += chars[randomIndex];
    }

    passwordInput.value = password;

});