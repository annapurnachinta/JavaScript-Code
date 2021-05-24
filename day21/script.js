let small_glass = document.querySelectorAll('.glass_small')
let liter = document.querySelector('.liter')
let percentage = document.querySelector('.percentage')
let remaine = document.querySelector('.remaine')

let percentage_glass = 12.5
let remaining = 100

small_glass.forEach((glass) =>{
    glass.addEventListener("click", function(){
        glass.classList.remove('full')
        removing()
    });
})

function removing(){
    remaining -= percentage_glass
    if(remaining === 0){
        liter.textContent = ''
        percentage.textContent = '100%'
        percentage.style.height = '100%'
        remaine.style.display = 'none'
    }else{
        liter.textContent = `${remaining}%`
        percentage.style.height = `${100 - remaining}%`
        percentage.textContent = `${100 - remaining}%`
    }
}