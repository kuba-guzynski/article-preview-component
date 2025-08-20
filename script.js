

const buttonLight = document.getElementById('share-button-light');
const buttonGroup = document.querySelector('.button-group');
const shareToast = document.querySelector('.share-toast');




buttonLight.addEventListener('click', function () {
    if (window.innerWidth < 768) {

        buttonGroup.classList.add('hidden')
        shareToast.classList.remove('hidden');


        const buttonAfterClick = document.getElementById('share-button-after-click');
        buttonAfterClick.addEventListener('click', function () {
            buttonGroup.classList.remove('hidden')
            shareToast.classList.add('hidden')
            shareToast.removeChild(frameShareToast);
        });
    } else {
        const buttonDark = document.getElementById('share-button-dark');
        const shareAlert = document.getElementById('share-toast-for-bigger-display');

        if (buttonDark.classList.contains('hidden')) {
            buttonLight.classList.add('hidden');
            buttonDark.classList.remove('hidden');
            shareAlert.classList.remove('hidden');
        } else {
            buttonLight.classList.remove('hidden');
            buttonDark.classList.add('hidden');
            shareAlert.classList.add('hidden');
        }
        buttonDark.addEventListener('click', function () {
            if (!buttonDark.classList.contains('hidden')) {
                buttonDark.classList.add('hidden');
                shareAlert.classList.add('hidden');
                buttonLight.classList.remove('hidden');
            }
        })

    }
});








