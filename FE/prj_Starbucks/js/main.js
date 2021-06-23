const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

/* document는 하나의 html이라면 window는 하나의 브라우저 탭이다. 즉, 프로젝트가 출력되는 화면 자체를 의미 */
window.addEventListener('scroll', _.throttle(function() {
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        // 배지 숨기기
        gsap.to(badgeEl, .6, { // gsap 라이브러리를 통해서 요소(badgeEl)에 0.6초간 애니메이션을 처리할 것임
            opacity: 0,
            display:'none'
        });
    }else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display:'block'
        });
    }
    
}, 300)); // 300 - 0.3초
// _.throttle(함수, 시간) 


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) { /* fadEl - 각각의 반복되는 fade in 엘리먼트 요소, index - 반복되는 횟수 */
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(fadeEl, 1, {
        delay: (index + 1)* .7, /* index는 0부터 */
        opacity: 1
    });
});

// new Sipwer(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction : 'vertical', // default : horizontal
    autoplay: true,
    loop:true,
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    // autoplay: {
    //     delay:5000 // default : 3000 (3초)
    // },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable : true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    
    navigation :{
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

// 프로모션 토글
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion;
    
    if(isHidePromotion) {
        //  숨김 처리!!
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리!!
        promotionEl.classList.remove('hide');
    }

});


// 범위 랜덤 함수 (소수점 2자리까지)
function random(min, max) {
    // `.toFiexed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 유튜브 영상 위에 둥둥 떠 있는 아이콘들
function floatingObject(selector, delay, size) {
    //gsap.to(요소, 시간, 옵션);
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1, // -1은 무한반복 gsap에서 지원하는 기능
        yoyo: true, // 한번 재생한 애니메이션을 다시 뒤로 재생 여기서는 위에서 아래로 내려갔다가 다시 아래에서 위로 올라가는 애니메이션을 구현
        ease: Power1.easeInOuteaseInOut,
        delay: random(0, delay)
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .1, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
    .Scene({
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
        triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); // 요소들을 감시하는 메서드
    
});