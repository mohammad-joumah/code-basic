function signup() {
    let email = emailId.value,
        password = passwordId.value,
        username = usernameId.value;
    console.log(email, password, username);
    let newUser = {
        email,
        password,
        username
    }
    let saveUser = JSON.stringify(newUser);
    localStorage.setItem('Users', saveUser)
    setTimeout(function() { window.location.href = 'signin.html'; }, 2000);
}

function signin() {
    let users;
    let checkStorage = localStorage.getItem('Users');

    if (checkStorage) {
        users = JSON.parse(localStorage.getItem('Users'))
        console.log(users)

        if (emailId.value == users.email && passwordId.value == users.password) {
            resultId.innerHTML = `
        your e-mail is ${users.email}<br>
        your Password is ${users.password}<br>
        your user name is ${users.username}<br>
        `
        } else {
            error.innerHTML = 'the email or password is wrong';
        }
    } else { error.innerHTML = 'there is no Database in local storage' }
}