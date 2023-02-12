// step 1: add click event handler with the Log in button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address inside the email input feild
    // Always remember to use .value to get text from an input feild
    const email = document.getElementById('emailFeild');
    const userEmail = email.value;
    // step 3: Get Password
    // set id on the html element, get the element, get the value of the element
    const password = document.getElementById('passwordFeild');
    const userPassword = password.value;

    email.value = '';
    password.value = '';
    // step 4: varify email and password
    if(userEmail === 'mshipan657@gmail.com' && userPassword === '123456789'){
        alert('Successfully Logged In');
        window.location.href = 'bank.html';
    } else {
        alert('Invalid Email or Password');
    }
});