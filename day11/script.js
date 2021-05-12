let item = document.querySelector('#home')
let hr = document.querySelector('.content hr')

function clicked(tab){
    console.log(tab)
    hr.style.animation = '.4s scale infinite';
    setTimeout(() => {
        hr.style.animation = 'none'
    }, 400)

    item.style.background = '#22bbee'
    let tabs = document.querySelector(`#${tab}`)
    tabs.style.background = '#189bc7'
    let title = document.querySelector('.content h1')
    title.innerHTML =  `${tab}`
    let content = document.querySelector('.content p')
    content.innerHTML = `${tab} - content`
    item = document.querySelector(`#${tab}`)
}