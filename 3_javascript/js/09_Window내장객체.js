// window.setTimeout(함수, 지연시간(ms))
document.getElementById("btn1").addEventListener("click", function () {
    setTimeout(function () {
        alert("3초후 출력 확인!");
    }, 3000);
});

let interval; //setInterval을 저장하기 위한 전역 변수

function clockFn() {
    const clock = document.getElementById("clock");
    clock.innerText = currentTime();

    //*1초마다 새로고침 됨
    //*지연시간 마다 반복( 첫 반목도 지연 시간 후에 시작)
    //* -> 페이지 로딩 후 1초 후 부터 (지연 -> 함수 -> 지연 -> 함수)
    interval = setInterval(function () {
        clock.innerText = currentTime();
    }, 1000);
}

//*현재 시간을 문자열로 반환하는 함수
function currentTime() {
    const now = new Date();

    //00:00:00 형식으로 바꾸기
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + min;

    return hour + " : " + min + " : " + sec;
}

clockFn(); //함수 호출

//clearInterval
document.getElementById("stop").addEventListener("click", function () {
    clearInterval(interval);
});
