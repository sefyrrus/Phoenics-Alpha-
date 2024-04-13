var checkbox = document.getElementById('check')
var button = document.getElementById('ido')

checkbox.addEventListener('change', function () {
if (checkbox.checked) {
    button.disabled = false;


} else {
    button.disabled = true;
}

});