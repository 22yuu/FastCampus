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

