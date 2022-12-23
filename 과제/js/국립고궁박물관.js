const slides = document.querySelector('.mainSlide');
const slideImg = document.querySelectorAll('.mainSlide li');
let currentIdx = 0; //현재 슬라이드 인덱스
const slideCount = slideImg.length; //슬라이드 개수

//버튼
const mainPrev = document.querySelector('.mainPrev');
const mainNext = document.querySelector('.mainNext');

const slideWidth = 1000; //슬라이드 한개 넓이
const slideMargin = 100; //슬라이드 간 마진

//처음 이미지와 마지막 이미지 복사 함수
makeClone();
//슬라이드 넓이와 위치값 초기화 함수
initfunction();

function makeClone() {
    let cloneSlide_first = slideImg[0].cloneNode(true);
    let cloneSlide_last = slides.lastElementChild.cloneNode(true);
    slides.append(cloneSlide_first);
    slides.insertBefore(cloneSlide_last, slides.firstElementChild);
}

function initfunction() {
    slides.style.width = 1000 + 'px';
    slides.style.left = -(slideWidth + slideMargin) + 'px';
}

mainNext.addEventListener('click', function () {
    if (currentIdx <= slideCount - 1) {
        //슬라이드 이동
        slides.style.left =
            -(currentIdx + 2) * (slideWidth + slideMargin) + 'px';
        slides.style.transition = '${0,5}s ease-out'; //이동 속도
    }
    if (currentIdx == slideCount - 1) {
        //마지막 슬라이드 일때
        setTimeout(function () {
            //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
            slides.style.left = -(slideWidth + slideMargin) + 'px';
            slides.style.transition = '${0}s ease-out';
        }, 500);
        currentIdx = -1;
    }
    currentIdx += 1;
});

mainPrev.addEventListener('click', function () {
    //이전 버튼 눌렀을때
    console.log(currentIdx);
    if (currentIdx >= 0) {
        slides.style.left = -currentIdx * (slideWidth + slideMargin) + 'px';
        slides.style.transition = `${0.5}s ease-out`;
    }
    if (currentIdx === 0) {
        setTimeout(function () {
            slides.style.left = -slideCount * (slideWidth + slideMargin) + 'px';
            slides.style.transition = `${0}s ease-out`;
        }, 500);
        currentIdx = slideCount;
    }
    currentIdx -= 1;
});
