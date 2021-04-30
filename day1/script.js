let hr = document.querySelector('p #hr')
let min = document.querySelector('p #min')
let sec = document.querySelector('p #sec')
let startBtn = document.querySelector('.container #startbtn')

let interval;
let hh = 0;
let mm = 0;
let ss = 0;

function start(){
    interval = setInterval(() => {
        if(ss < 59){
            ss += 1;
            ss < 10 ? sec.innerHTML = '0' + ss : sec.innerHTML = ss;
        }else{
            ss = 0;
            ss < 10 ? sec.innerHTML = '0' + ss : sec.innerHTML = ss;
            if(mm < 59){
                mm += 1;
                mm < 10 ? min.innerHTML = '0' + mm : min.innerHTML = mm;
            }else{
                hh += 1;
                hh < 10 ? hr.innerHTML = '0' + hh : hr.innerHTML = hr;
            }
        }
    }, 1000)
}

function stop(){
    clearInterval(interval)
}