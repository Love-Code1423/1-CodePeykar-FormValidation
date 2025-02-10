function validatePasswords() {
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeat_password").value;
    const errorMessage = document.getElementById("error_message");

    if (password !== repeatPassword) {
        errorMessage.textContent = "رمز عبور و تکرار آن باید یکسان باشد.";
        return false;
    } else {
        errorMessage.textContent = "";
        return true;
    }
}