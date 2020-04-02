// javascript
const toggle1 = document.getElementById('toggle1');

function toggleContainer (num, button) {
    const container = document.querySelector(`.container${num}`)
    if (container.classList.contains('hide')) {
        container.classList.remove('hide')
        button.textContent = `Hide Container ${num}`          
    } else {
        container.classList.add('hide')
        button.textContent = `Show Container ${num}`  
    }
}

toggle1.addEventListener('click', function () {
    toggleContainer(1, this)
})

toggle2.addEventListener('click', function () {
    toggleContainer(2, this)
})