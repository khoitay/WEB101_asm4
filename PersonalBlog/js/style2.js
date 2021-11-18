function orderValidation() {
    let selectBook = document.getElementById('books')
    let name = document.getElementById('name')
    let message = document.getElementById('message')
    let date = document.getElementById('date')
    let deliverTo = document.getElementById('deliver')
    
    let check = true
    if (selectBook.value == '---select-book---') {
        document.getElementById('error-select').innerHTML = 'Please select our product.'
        check = false
    } else {
        document.getElementById('error-select').innerHTML = ''
    }

    if (name.value.length == 0) {
        document.getElementById('error-name').innerHTML = 'Please fill out your name.'
        check = false
    } else if (name.value.length > 100) {
        document.getElementById('error-name').innerHTML = 'Your name should not exceed 100 characters.'
        check = false
    } else {
        document.getElementById('error-name').innerHTML = ''
    }

    if (message.value.length > 30) {
        document.getElementById('error-message').innerHTML = 'Message should not exceed 30 characters.'
        check = false
    } else {
        document.getElementById('error-message').innerHTML = ''
    }

    if (date.value == '') {
        document.getElementById('error-date').innerHTML = 'Please fill out the deliver date.'
        check = false
    } else {
        document.getElementById('error-date').innerHTML = ''
    }

    if (deliverTo.value.length == 0) {
        document.getElementById('error-deliver').innerHTML = 'Please fill out the address.'
        check = false
    } else if (deliverTo.value.length > 500) {
        document.getElementById('error-deliver').innerHTML = 'Address should not exceed 500 characters.'
        check = false
    } else {
        document.getElementById('error-deliver').innerHTML = ''
    }
    return check
}