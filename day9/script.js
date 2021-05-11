let loadText = document.querySelector('.loading_text')
let bg = document.querySelector('.bg')

let load=0
let num = setInterval(blurring, 30)

function blurring(){
    load++
    if(load > 99){
        clearInterval(num)
    }

    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scala(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scala(load, 0, 100, 30, 0)}px)`
}

let scala = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min 
}