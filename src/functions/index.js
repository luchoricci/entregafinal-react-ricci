const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
const surnameRegex = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
const DNIRegex = /^[0-9]{8,15}$/;
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const phoneRegex = /^[0-9]{7,15}$/;
const addressRegex = /^[a-zA-ZÀ-ÿ0-9\s]{8,80}$/;


export const validateInput = ({ type, value }) => {
    let hasError = false;
    let error = '';
    const formatValue = value.trim();

    switch (type) {
        case 'name':
            if(formatValue === "") {
                hasError = true;
                error = 'Name is required';
            } else if(!nameRegex.test(formatValue)) {
                hasError = true;
                error = 'Name is invalid';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'surname':
            if(formatValue === "") {
                hasError = true;
                error = 'Surname is required';
            } else if(!surnameRegex.test(formatValue)) {
                hasError = true;
                error = 'Surname is invalid';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'DNI':
            if(formatValue === "") {
                hasError = true;
                error = 'DNI is required';
            } else if(!DNIRegex.test(formatValue)) {
                hasError = true;
                error = 'DNI is invalid';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'email':
            if(formatValue === "") {
                hasError = true;
                error = 'Email is required';
            } else if(!emailRegex.test(formatValue)) {
                hasError = true;
                error = 'Email is invalid';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'phone':
            if(formatValue === "") {
                hasError = true;
                error = 'Phone is required';
            } else if(!phoneRegex.test(formatValue)) {
                hasError = true;
                error = 'Phone is invalid';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'address':
            if(formatValue === "") {
                hasError = true;
                error = 'Address is required';
            } else if(!addressRegex.test(formatValue)) {
                hasError = true;
                error = 'Address is invalid';
            } else {
                hasError = false;
                error = '';
            }
            break;
            
            default: 
            hasError = false;
            error = ''
            break;

    }

    return { hasError, error }
}







