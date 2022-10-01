// Assignment:
// 1. Create a html page with design of your choice
// a. Include a form inside your designed page with details to be gotten from the form should be 
// 	firstname  	-- input text
// 	lastname	-- input text
// 	email		-- input email
// 	gender		-- select	
// 	phone		-- input text/number
// 	date of birth	-- input date
// 	password	-- input password
// b. Validate the form inputs and make sure they are not empty or null, and the password length should not be lower than 5

// c. If all details are correctly submitted, show the details submitted by the user in the browser.

// d. On the Click of a button: If all details are correctly submitted, show the details submitted by the user in the browser, and let all inputs be empty.

// e. Create a function that will calculate the person's age based on the input date and display the persons age.



const form = document.getElementById('signup');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const genderOption = document.getElementsByName('gender');
const telInput = document.getElementById('phoneNumber')
const dateOfBirthInput = document.getElementById('dateOfBirth');
const passwordInput = document.getElementById('password');

form.addEventListener('submit',(event)=>{
    
    validateForm();
    if(isFormValid()==true){
        form.submit();
    }else {
    event.preventDefault();
        
    }

    calculateAge();

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    })
    return result;
}

function validateForm() {
    //FIRSTNAME
    if(firstName.value.trim() ==''){
        setError(firstName, 'Enter your First Name');
    }else if(firstName.value.trim().length < 3 || firstName.value.trim().length > 15){
        setError(firstName, "min of 5 characters and max of 15" )
    }else {
        setSuccess(firstName);
    }

    //LASTNAME
    if(lastName.value.trim()==''){
        setError(lastName, 'Enter Your Last Name');
    }else if(lastName.value.trim().length < 3 || lastName.value.trim().length > 15){
        setError(lastName, "min of 5 characters and max of 15")
    }else{
        setSuccess(lastName);
    }

    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide Email Address')
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Provide Valid Email Address');
    }

    //GENDER
    // if((genderOption[0].checked || genderOption[1].checked)){
    //     setError(genderOption, 'Select Your Gender');
    // }


    //PHONENUMBER
    if(telInput.value.trim()==""){
        setError(telInput, 'Enter Phone Number');
    }else if(telInput.value.trim().length < 5 || telInput.value.trim().length > 11){
        setError(telInput, 'min of 5 digits and max of 11')
    }else {
        setSuccess(telInput);
    }


    //DOB
    if(dateOfBirthInput.value.trim()=="" || dateOfBirthInput.value==null){
        setError(dateOfBirthInput, "Choose a date please")
    }else{
        setSuccess(dateOfBirthInput);
    }
    //PASSWORD
    if(passwordInput.value.trim()==''){
        setError(passwordInput, 'Password field cannot be empty');
    }else if (passwordInput.value.trim().length < 5 || passwordInput.value.trim().length > 20){
        setError(passwordInput, 'password min 5 and max 20 characters')
    }else if(passwordInput.value == 'password' || passwordInput.value == 'PASSWORD'){
        setError(passwordInput, 'password cannot be password')
    }
    else{
        setSuccess(passwordInput);
    }
}

function setError(element, errorMessage){
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element) {
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error')
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const emailRegExp =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegExp.test(email);
}

function calculateAge() {
    let now = new Date();
    let age = parseInt(dateOfBirthInput.value) - parseInt(now);
    return age;
}
  