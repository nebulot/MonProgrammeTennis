// Show error message
export const setErrorMessage = (element, message) => {
    element.parentElement.setAttribute('data-error-visible', 'true');
    element.parentElement.setAttribute('data-error', message);
};

// Hide error message
export const hideErrorMessage = element => {
    element.parentElement.removeAttribute('data-error-visible');
    element.parentElement.removeAttribute('data-error');
};

// Check input value
export function checkInputValue(regex, element, message) {
    if (!regex.test(element.value)) {
        setErrorMessage(element, message);
        return false;
    } 
    hideErrorMessage(element);
    return true; 
};

// Check if conditions are accepted
export function checkIfConditionsAccepted(element, message) {
    if(!element.checked) {
        setErrorMessage(element, message);
        return false;
    } 
    hideErrorMessage(element);
    return true;  
};



