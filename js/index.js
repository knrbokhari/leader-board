const changingColor = document.getElementsByClassName('change-color');
for (const item of changingColor) {
    item.addEventListener('click', function (event) {
        event.target.style.color = '#2ebdff';
    })
}
