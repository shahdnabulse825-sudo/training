const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "") {
        alert("please enter your email");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("please enter a valid email");
        return;
    }

    if (password === "") {
        alert("please enter your password");
        return;
    }

    if (password.length < 8) {
        alert("Password must be 8 characters at least");
        return;
    }

    if (!/[A-Z]/.test(password)) {
        alert("please enter one capital letter at least");
        return;
    }

    if (!/[a-z]/.test(password)) {
        alert("please enter one small letter at least");
        return;
    }

    if (!/[0-9]/.test(password)) {
        alert("please enter one digit at least");
        return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
        alert("please enter one special character at least");
        return;
    }

    alert("Form submitted successfully");

});