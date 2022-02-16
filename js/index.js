const changingColor = document.getElementsByClassName('change-color');
for (const item of changingColor) {
    item.addEventListener('click', function (event) {
        event.target.style.color = '#2ebdff';
    })
}

// document.getElementById("top-players").style.backgroundColor = 'rgb(255 163 0 / 10%)';

document.getElementById('submit').addEventListener('click', function () {
    // get input
    const inputText = document.getElementById('input-text');
    // graving ul
    const ulList = document.getElementById('ul-list');
    // console.log(ulList.innerHTML);
    const addText = document.createElement('li');
    // console.log(addText);
    addText.innerText = inputText.value;
    if (0 < addText.innerText.length) {
        ulList.appendChild(addText);
    }
    inputText.value = '';

})