

const buttonBeforeClick = document.getElementById('share-button');
const buttonGroup = document.querySelector('.button-group');
const shareToast = document.querySelector('.share-toast');




buttonBeforeClick.addEventListener('click', function () {
    if (window.innerWidth < 768) {

        buttonGroup.classList.add('hidden')
        const frameShareToast = document.createElement('div')
        frameShareToast.className = 'frame-share-toast';

        frameShareToast.innerHTML = `
        <div class="share-toast-box-with-everything">
          <span class="share-text">SHARE</span>
          <div class="social-icon">
            <img src="./images/icon-facebook.svg" alt="facebook-icon">
            <img src="./images/icon-twitter.svg" alt="twitter-icon">
            <img src="./images/icon-pinterest.svg" alt="pinterest-icon">
          </div>
        </div>
        <button class="share-button" id="share-button-after-click" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#6E8098" />
            <path
              d="M24 15.495L17.7663 9.01392V12.8807H16.4409C12.3314 12.8807 9 16.0393 9 19.9358V21.9849L9.58868 21.3733C11.5901 19.2941 14.4221 18.1094 17.3912 18.1094H17.7663V21.9762L24 15.495Z"
              fill="white" />
          </svg>

        </button>`

        shareToast.classList.remove('hidden');
        shareToast.appendChild(frameShareToast);

        const buttonAfterClick = document.getElementById('share-button-after-click');
        buttonAfterClick.addEventListener('click', function () {
            buttonGroup.classList.remove('hidden')
            shareToast.classList.add('hidden')
            shareToast.removeChild(frameShareToast);
        });
    } else {
        //ten fragment trzeba przerobić i zrobić to na podstawie hidden przeglądarka się gubi w czytaniu kodu 

        console.log(buttonBeforeClick)
        buttonBeforeClick.innerHTML = ""
        buttonBeforeClick.insertAdjacentHTML('afterbegin', `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#6E8098" />
            <path
              d="M24 15.495L17.7663 9.01392V12.8807H16.4409C12.3314 12.8807 9 16.0393 9 19.9358V21.9849L9.58868 21.3733C11.5901 19.2941 14.4221 18.1094 17.3912 18.1094H17.7663V21.9762L24 15.495Z"
              fill="white" />
          </svg>`);

        buttonBeforeClick.addEventListener('click', function () {
            buttonBeforeClick.innerHTML = "";
            buttonBeforeClick.insertAdjacentHTML('afterbegin', `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#ECF2F8" />
            <path
              d="M24 15.495L17.7663 9.01389V12.8806H16.4409C12.3314 12.8806 9 16.0393 9 19.9358V21.9849L9.58868 21.3733C11.5901 19.2941 14.4221 18.1094 17.3912 18.1094H17.7663V21.9761L24 15.495Z"
              fill="#6E8098" />
          </svg>`);

        })
    }
});








