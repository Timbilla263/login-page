function loginButton(){
   const buttonElem = document.querySelector('.login-button-js');
if(buttonElem.innerHTML === 'LOGIN'){
    buttonElem.innerHTML = ' LOADING...';
}else{
    buttonElem.innerHTML = 'LOGIN';
}


}
