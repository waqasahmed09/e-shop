

let btnSignIn = document.querySelector('#btnSignIn');
let data = localStorage.getItem('userData');
let items = JSON.parse(data)

let loginEmail = document.querySelector('#email1');
let password1 = document.querySelector('#password1');
function signIn(event) {
    event.preventDefault();
    let isCredentialsCorrect = false;

    for (let i = 0; i < items.length; i++) {
        // console.log(items[i]);
        if (items[i].email === loginEmail.value && items[i].password === password1.value) {
            console.log('credientals match');
            isCredentialsCorrect = true;
            break
        }
    }

    if (isCredentialsCorrect) {
        console.log('You are logged in');
        window.location = 'homepage.html'
    } else {
        console.log('Go to the sign-up page');
        Swal.fire({
            icon: "error",
            title: "Incorrect Credentials",
            text: "with this credentials user not found",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
}

btnSignIn.addEventListener('click', signIn);







