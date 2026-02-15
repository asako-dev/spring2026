// ハンバーガーメニュー開閉

const btnOpen = document.querySelector('#navMenu');
const btn = document.querySelectorAll("#navBtn , #navMenu a");

btn.forEach((elm) => {
    elm.addEventListener('click', function () {
        btnOpen.classList.toggle('show');
    });
});

// swiper
  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
      // 基本的な設定
      loop: true, // ループさせる
      pagination: {
        el: '.swiper-pagination', // ページネーションの要素
        clickable: true, // クリック可能にする
      },
      navigation: {
        nextEl: '.swiper-button-next', // 次へボタン
        prevEl: '.swiper-button-prev', // 前へボタン
      },
      
    });
  });


//アコーディオン
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      btn.closest('.is-accordion').classList.toggle('is-open');
    });
  });

  // ふわっと表示
window.addEventListener("load", function () {
  const dlArea = document.getElementById("dl-area");

  if (!dlArea) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      dlArea.classList.add("is-show");
    } else {
      dlArea.classList.remove("is-show");
    }
  });
});

