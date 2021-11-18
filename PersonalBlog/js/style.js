function validation() {
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let subject = document.getElementById('subject')
    let message = document.getElementById('message')
    let patternEmail = /\w+@\w[a-zA-Z]\.com$/i 
    let check = true

    //name validation
    if (name.value.length == 0) {
        document.getElementById('errorName').innerHTML = 'Please fill out your name.'
        check = false
    } else if (name.length > 100) {
        document.getElementById('errorName').innerHTML = 'Your name should not exceed 100 characters.'
        check = false
    } else {
        document.getElementById('errorName').innerHTML = ''
    }

    //email validation
    if (email.value.length == 0) {
        document.getElementById('errorEmail').innerHTML = 'Please fill out your email.'
        check = false
    } else if (name.length > 100) {
        document.getElementById('errorEmail').innerHTML = 'Your email should not exceed 100 characters.'
        check = false
    } else {
        document.getElementById('errorEmail').innerHTML = ''
    }

    //subject validation
    if (subject.value.length == 0) {
        document.getElementById('errorSubject').innerHTML = 'Please fill out the subject.'
        check = false
    } else if (subject.value.length < 50) {
        document.getElementById('errorSubject').innerHTML = 'Subject should not shorter than 50 characters.'
        check = false
    } else if (subject.value.length > 250) {
        check = false
        document.getElementById('errorSubject').innerHTML = 'Subject should not exceed 250 characters.'
    } else {
        document.getElementById('errorSubject').innerHTML = ''
    }

    //message validation
    if (message.value.length == 0) {
        document.getElementById('errorMessage').innerHTML = 'Please fill out the message.'
        check = false
    } else if (message.value.length < 50) {
        document.getElementById('errorMessage').innerHTML = 'Subject should not shorter than 50 characters.'
        check = false
    } else if (message.value.length > 500) {
        check = false
        document.getElementById('errorMessage').innerHTML = 'Message should not exceed 500 characters.'
    } else {
        document.getElementById('errorMessage').innerHTML = ''
    }
    return check
}
