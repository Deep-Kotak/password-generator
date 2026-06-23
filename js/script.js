const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", function() {

    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let password = "";

    for (let i = 0; i < 12; i++) {

        const randomIndex =
            Math.floor(Math.random() * chars.length);

        password += chars[randomIndex];
    }

    passwordInput.value = password;

});