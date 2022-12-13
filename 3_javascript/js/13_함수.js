//* 기본 함수
function clickCount(btn) {
    btn.innerText = Number(btn.innerText) + 1;
}

//*-------------------------------------------------

//*즉시 실행 함수 확인하기
function test1() {
    //기본 함수 선언. 정의
    console.log("기본 함수");
}

test1();

//*즉시 실행 함수
(function () {
    console.log("즉시 실행 함수");
    //* 호출하지 않아도 자동으로 수행
})();

//* 즉시 실행 함수의 변수명 중복 해결
const str = "전역변수";

(function () {
    const str = "즉시 실행 함수의 지역 변수";
    console.log(str);
})();

console.log(str); //"전역변수"

//*--------------------------------------------------

//*화살표 함수(Arrow Function)
//*1.기본형태 : ([매개변수]) => {}
document.getElementById("btn2-1").addEventListener("click", () => {
    alert("화살표 함수 기본 형태 입니다.");
});

//*2.매개변수 1개 : 매개변수 => {} // e => {}
document.getElementById("btn2-2").addEventListener("click", (e) => {
    e.target.style.backgroundColor = "beige";
});

//*3. {}, return 생략
document.getElementById("btn2-3").addEventListener("click", () => {
    //*함수 호출(익명함수)
    printConsol(function (num) {
        return num * 10;
    });

    //* 함수 호출(화살표 함수)(num => {num *5})
    printConsol((num) => {
        num * 5;
    });

    //* 반환값이 object이면 {}, return 생략 불가
    //* → 화살표(=>) 다음에 함수 정의 부분이 있어야 하는데 객체(object)가 작성되어 있어 문법 오류 발생
    printConsol((num) => {
        return { price: num * 1000, n: num };
    });
    //! 문법 오류 printConsol((num) => { price: num * 1000, n: num });
});

function printConsol(fn) {
    //매개변수로 함수가 전달됨
    console.log(fn(2));
}

//* this(이벤트가 발생한 요소) 사용 불가
//* 1) 익명함수는 this 사용 가능
document.getElementById("btn2-4").addEventListener("click", function () {
    this.style.backgroundColor = "skyblue";
});

//* 2) 화살표 함수는 this 사용 불가
document.getElementById("btn2-4").addEventListener("click", (e) => {
    //! 화살표 함수에서 this는 window 창 자체를 나타내는 객체임.
    console.log(this);
    // this.style.color = "pink";
    //! this == e.target
    e.target.style.color = "white";
});
