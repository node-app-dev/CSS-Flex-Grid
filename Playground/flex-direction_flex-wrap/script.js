const direction = document.getElementsByName('direction');
const wrap = document.getElementsByName('wrap');

// flex-direction set value
flexDirection.addEventListener('change', function () {
    direction.forEach(name => {
        if (name.checked) {
           container.style.flexDirection = name.value
        }
    })
})

// flex-wrap set value
flexWrap.addEventListener('change', function () {
    wrap.forEach(name => {
        if (name.checked) {
           container.style.flexWrap = name.value
        }
    })
})