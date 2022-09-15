

let btn = document.querySelector(".btn");
let errorMessage = document.querySelector(".errorMessage");
let textField = document.querySelector(".email");


textField.setCustomValidity('');
textField.classList.add('active');
errorMessage.classList.add('hide');
//remove message when new text is input
btn.addEventListener("click", submitBtn);

function submitBtn() {
    console.log(textField.value);

    if(validate(textField.value)){
        textField.classList.remove('error');
        errorMessage.classList.remove('show');
        errorMessage.classList.add('hide');
        return;
    }
    textField.classList.add('error');
    errorMessage.classList.remove('hide');
    errorMessage.classList.add('show');


}
function validate(email){
    
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    
}