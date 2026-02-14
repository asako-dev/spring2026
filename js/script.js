// ハンバーガーメニュー開閉

const btnOpen = document.querySelector('#navMenu');
const btn = document.querySelectorAll("#navBtn , #navMenu a");

btn.forEach((elm) => {
    elm.addEventListener('click', function () {
        btnOpen.classList.toggle('show');
    });
});



