var toggle = document.getElementById('toggle');
var modal = document.getElementById('modal');
var closeState = document.getElementById('closeState');
var openState = document.getElementById('openState');
toggle.addEventListener('click', function () {
    document.body.classList.toggle('show-nav');
});
openState.addEventListener('click', function () {
    return modal.classList.add('show-modal');
});
closeState.addEventListener('click', function () {
    return modal.classList.remove('show-modal');
});
window.addEventListener('click', function (e) {
    return e.target === modal ? modal.classList.remove('show-modal') : false;
});
