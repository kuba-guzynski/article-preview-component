
const buttonBeforeClick = document.getElementById('share-button');
const buttonAfterClick = document.getElementById('share-button-after-click');
const buttonGroup = document.querySelector('.button-group');
const shareToast = document.querySelector('.share-toast');



buttonBeforeClick.addEventListener('click', function () {
    buttonGroup.classList.add('hidden')
    shareToast.classList.remove('hidden')
});

buttonAfterClick.addEventListener('click', function () {
    buttonGroup.classList.remove('hidden')
    shareToast.classList.add('hidden')
});



