let small_glass = document.querySelectorAll('.glass_small')
let liter = document.querySelector('.liter')
let percentage = document.querySelector('.percentage')
let remaine = document.querySelector('.remaine')

let percentage_glass = 12.5
let remaining = 100
let total = 2000

small_glass.forEach((glass) =>{
    glass.addEventListener("click", function(){
        glass.classList.remove('full')
        removing()
    });
})

function removing(){
    remaining -= percentage_glass
    total -= 250
    if(remaining === 0){
        liter.textContent = ''
        percentage.textContent = '100%'
        percentage.style.height = '100%'
        remaine.style.display = 'none'
    }else{
        liter.textContent = `${total/1000}L`
        percentage.style.height = `${100 - remaining}%`
        percentage.textContent = `${100 - remaining}%`
    }
}