var state = false;
function expand(){
    if(state === false){
        document.getElementById('items').style.transform = 'scaleX(1)';
        document.getElementById('toggle').style.transform = 'rotate(45deg)';
        state = true
    }else{
        document.getElementById('items').style.transform = 'scaleX(0)';
        document.getElementById('toggle').style.transform = 'rotate(0deg)';
        state = false
    }
}