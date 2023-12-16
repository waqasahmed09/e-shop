let btn = document.querySelector('#btn');
let arr = [];

let email = document.querySelector('#email');
let password = document.querySelector('#password');

btn.addEventListener('click', (event) => {
    event.preventDefault();

    // Validate email format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address");
        return;
    }

    if (password.value.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }

    let obj = {
        email: email.value,
        password: password.value
    };

    arr.push(obj);
    console.log(arr);
    localStorage.setItem('userData', JSON.stringify(arr));

    Swal.fire("Congratulations, your account is created.");

    window.location = 'signin.html';
});
