const passwordCount =
    document.getElementById("passwordCount");

const copyMessage =
    document.getElementById("copyMessage");

const passwordHistory =
    document.getElementById("passwordHistory");
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

    const li = document.createElement("li");

    li.textContent = password;

    passwordHistory.innerHTML = "";

    const count =
        parseInt(passwordCount.value);

    for (let j = 0; j < count; j++) {

        let password = "";

        for (let i = 0; i < passwordLength; i++) {

            const randomIndex =
                Math.floor(Math.random() * chars.length);

            password += chars[randomIndex];

        }

        const li =
            document.createElement("li");

        li.textContent = password;

        passwordHistory.appendChild(li);

        if (j === 0) {
            passwordInput.value = password;
        }

    }

    if (passwordHistory.children.length > 5) {

        passwordHistory.removeChild(
            passwordHistory.lastChild
        );

    }

    if (passwordLength < 10) {

        strength.textContent =
            "Strength: Weak";

        strength.className =
            "strength weak";

    } else if (passwordLength < 20) {

        strength.textContent =
            "Strength: Medium";

        strength.className =
            "strength medium";

    } else {

        strength.textContent =
            "Strength: Strong";

        strength.className =
            "strength strong";

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

    copyMessage.textContent =
        "✅ Password Copied Successfully!";

    setTimeout(() => {

        copyMessage.textContent = "";

    }, 2000);

});