const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {

    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email == "") {
        alert("please enter your email"); }
    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("please enter a valid email");
    }
    else if (password == "") {
        alert("please enter your password");
    }
    else if (password.length < 8) {
        alert("password must be 8 characters at least");
    }
    else if (!/[A-Z]/.test(password)) {
        alert("please enter one capital letter at least");
    }
    else if (!/[a-z]/.test(password)) {
        alert("please enter one small letter at least");
    }
    else if (!/[0-9]/.test(password)) {
        alert("please enter one digit at least");
    }
    else if (!/[!@#$%^&*]/.test(password)) {
        alert("please enter one special character at least"); }
    else {
        alert("Done");
    }
});

