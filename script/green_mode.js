
function mode(){
    if (document.body.style.backgroundColor=="cadetblue") {

        document.body.style.backgroundColor="white";
        document.querySelector('.btn__main__mode').innerHTML='Mode green';
    }
    else{
        document.body.style.backgroundColor="cadetblue";
        document.querySelector('.btn__main__mode').innerHTML='Mode blanc';
    }
}