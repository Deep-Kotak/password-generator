const passwordInput =
    document.getElementById("password");

const generateBtn =
    document.getElementById("generateBtn");

const copyBtn =
    document.getElementById("copyBtn");

const strength =
    document.getElementById("strength");

const lengthSlider =
    document.getElementById("lengthSlider");

const lengthValue =
    document.getElementById("lengthValue");

const uppercase =
    document.getElementById("uppercase");

const lowercase =
    document.getElementById("lowercase");

const numbers =
    document.getElementById("numbers");

const symbols =
    document.getElementById("symbols");


lengthSlider.addEventListener("input", function() {

    lengthValue.textContent =
        lengthSlider.value;

});


generateBtn.addEventListener("click", function() {

    let chars = "";

    if (uppercase.checked)
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (lowercase.checked)
        chars += "abcdefghijklmnopqrstuvwxyz";

    if (numbers.checked)
        chars += "0123456789";

    if (symbols.checked)
        chars += "!@#$%^&*()_+-=[]{}";

    if (chars.length === 0) {

        alert("Select at least one option!");

        return;
    }

    let password = "";

    const passwordLength =
        parseInt(lengthSlider.value);

    for (let i = 0; i < passwordLength; i++) {

        const randomIndex =
            Math.floor(Math.random() * chars.length);

        password += chars[randomIndex];
    }

    passwordInput.value = password;

    if (passwordLength < 10) {

        strength.textContent =
            "Strength: Weak";

    } else if (passwordLength < 20) {

        strength.textContent =
            "Strength: Medium";

    } else {

        strength.textContent =
            "Strength: Strong";
    }

});


copyBtn.addEventListener("click", function() {

    if (passwordInput.value === "") {

        alert("Generate Password First!");

        return;
    }

    navigator.clipboard.writeText(
        passwordInput.value
    );

    alert("Password Copied!");

});