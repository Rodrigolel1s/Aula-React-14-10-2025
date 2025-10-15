const inputPasswordId = document.getElementById("inputPassword");
const togglePasswordId = document.getElementById("togglePassword");

togglePasswordId.addEventListener("click", () => {
    const isPassword = inputPasswordId.type === "password";
    inputPasswordId.type = isPassword ? "text" : "password";
    iconEye.classList.toggle("bi-eye");
    iconEye.classList.toggle("bi-eye-slash");
});1