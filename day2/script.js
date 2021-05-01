rangeInput = document.getElementById('range')
container = document.getElementsByClassName('container')[0];

rangeInput.addEventListener('change', () => {
    container.style.filter = 'brightness(' + rangeInput.value + '%)';
})