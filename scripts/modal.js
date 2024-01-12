import { checkInputValue, checkIfConditionsAccepted} from "./function.js";

// Modal Navigation
const formWrapper = document.querySelector(".form_wrapper");
const modalSuccess = document.querySelector('.modal_success')
const btnSignup = document.querySelectorAll(".btn_signup");
const modalClose = document.querySelector(".btn-close");
const btnNav = document.querySelector('#btn_hamb');

// Form
const form = document.querySelector('form');
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');
const conditionsCheckbox = document.querySelector('#checkbox1');

// Toggle navbar
btnNav.addEventListener('click', () => document.querySelector('.list').classList.toggle('menu_toggle'));

// Open / Close Modal Form
btnSignup.forEach(btn => { btn.addEventListener('click', () => formWrapper.style.display = "flex") });
modalClose.addEventListener('click', () => formWrapper.style.display = "none");

// Message error
const message = {
    password: 'Minimum 2 caractères, maximum 15 caractères. Les chiffres et caractères spéciaux différents de - ne sont pas autorisés',
    email: 'Veuillez renseigner une adresse mail valide.',
    conditions: `Vous devez accepter les conditions d'utilisation`,
};

// Regex
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexPassword = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{2,15})$/;


// Check input with event listener
passwordField.addEventListener('input', () => checkInputValue(regexPassword, passwordField, message.password)); 
emailField.addEventListener('input', () => checkInputValue(regexEmail, emailField, message.email));
conditionsCheckbox.addEventListener('input', () => checkIfConditionsAccepted(conditionsCheckbox, message.conditions));
       
// Validate form
function validate(e) {
    e.preventDefault();

    // Check if all conditions are valid
    const isConditionsAccepted = checkIfConditionsAccepted(conditionsCheckbox, message.conditions);
    const isEmailValid = checkInputValue(regexEmail, emailField, message.email);
    const isPasswordValid = checkInputValue(regexPassword, passwordField, message.password);


    // If all conditions are valid 
    if (isConditionsAccepted && isEmailValid && isPasswordValid) {
        formWrapper.style.display = 'none';
        modalSuccess.style.display = 'flex';
        form.reset();
    } 
};

// Send Form
form.addEventListener('submit', e => validate(e));

// Close Success Modal
document.querySelector('.modal_content button').addEventListener('click', () => modalSuccess.style.display = "none");