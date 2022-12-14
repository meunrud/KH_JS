//*정규표현식 객체 생성 + 확인하기
document.getElementById('check1').addEventListener('click', function () {
    // *정규 표현식 객체 생성
    const regExp1 = new RegExp('script');
    //script 와 일치하는 문자열이 있는지 검사하는 정규 표현식

    const regExp2 = /java/;
    //java와 일치하는 문자열이 있는지 검사하는 정규 표현식

    //*확인하기
    const str1 = '저희는 지금 javascript를 공부하고 있습니다.';
    const str2 = 'servlet/jsp(java server page)도 조만간 합니다.';
    const str3 = 'java, java, java';

    console.log('regExp1.test(str1) : ' + regExp1.test(str1));
    //→ regExp1.test(str1) : true
    console.log(regExp1.exec(str1));

    console.log('regExp2.test(str2) : ' + regExp1.test(str2));
    //→ regExp1.test(str2) : false
    console.log(regExp2.exec(str2));

    //*일치하는게 없는 경우
    console.log('regExp1.test(str2) : ' + regExp1.test(str2));
    //→ regExp1.test(str2) : false
    console.log(regExp1.exec(str2));
    //→ null

    //*일치하는게 여러개 있는 경우
    console.log('regExp2.test(str3) : ' + regExp2.exec(str3));
    //→ regExp2.test(str3) : java
    console.log(regExp2.exec(str3));
    //→ index: 0
});

document.getElementById('btn1').addEventListener('click', function () {
    const div1 = document.getElementById('div1');

    div1.innerHTML = '';

    //* a(일반 문자열) : 문자열 내에 a 라는 문자열이 존재하는지 검색
    const regExp1 = /a/;
    div1.innerHTML += '/a/ , apple : ' + regExp1.test('apple') + '<hr>'; //true
    div1.innerHTML += '/a/ , price : ' + regExp1.test('price') + '<hr>'; //false

    //*[abcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색
    const regExp2 = /[abcd]/;
    div1.innerHTML += '[abcd], apple : ' + regExp2.test('apple') + '<hr>'; //true
    div1.innerHTML += '[abcd], sub : ' + regExp2.test('sub') + '<hr>'; //true
    div1.innerHTML += '[abcd], qwert : ' + regExp2.test('qwert') + '<hr>'; //false

    //* ^(캐럿) : 문자열의 시작 의미
    const regExp3 = /^group/; // 문자열의 시작이 group인지 확인
    div1.innerHTML +=
        '/^group/, group100 : ' + regExp3.exec('group100') + '<hr>'; //group
    div1.innerHTML +=
        '/^group/, group100 : ' + regExp3.exec('100group') + '<hr>'; //null

    //* $(달러) : 문자열의 끝을 의미
    const regExp4 = /money$/;
    div1.innerHTML += '/money$/, money01 : ' + regExp4.exec('money01') + '<hr>'; //null
    div1.innerHTML += '/money$/, 01money : ' + regExp4.exec('01money') + '<hr>'; //money
});

//*이름 유효성 검사
document.getElementById('inputName').addEventListener('keyup', function () {
    const key = window.event.key;

    //결과 출력용 span
    const span = document.getElementById('inputNameResult');

    //한글 2-5글자 정규 표현식(정규식)
    const regExp5 = /^[가-힣]{2,5}$/;
    console.log(key);

    //유효성

    //만약에 정규식이 유효하다면 span 내부에 "유효한 형식입니다."
    //span 폰트 색상 : green, 폰트 굵게

    //유효하지 않다면 span 내부에 "이름 형식이 유효하지 않습니다. "
    //span 폰트 색상 : red, 폰트 굵게

    if (key == 'Enter') {
        if (regExp5.test(this.value) == true) {
            //inputName에 작성된 값이 유효한 경우
            span.style.color = 'green';
            span.style.fontWeight = 'bold';
            span.innerHTML = '유효한 이름 형식입니다.';
        } else {
            span.style.color = 'red';
            span.style.fontWeight = 'bold';
            span.innerHTML = '이름 형식이 유효하지 않습니다.';
        }
    }

    //*빈칸인지 검사
    //빈칸이라면 span에 작성된 내용 초기화(삭제)
    if (this.value.length == 0) {
        span.innerHTML = ' ';
    }
});

//*주민등록번호 유효성 검사
document.getElementById('inputPno').addEventListener('keyup', function () {
    //결과 출력 span 태그
    const span = document.getElementById('inputPnoResult');
    // const regExp7 = /^[0-9]{6}-[0-9]{7}$/;
    //^\d{6}-\d{7}$
    //^\d{6}\-\d{7}$

    //*업그레이드
    //*() : 포획 괄호, 괄호 내부에 대응되는 부분을 찾아서 기억함
    //* | : 또는

    //*월
    //* (0[1-9]|1[0-2]) : 괄호 내 | 기호를 기준으로 구분되며 0이 먼저 입력된 경우 다음 자리는 0-9, 1이 먼저 입력된 경우 다음 자리는 0-2
    const regExp8 =
        /^\d{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])-[1-4]\d{6}$/;

    //* 요소.classList : 요소가 가지고 있는 클래스를 배열로 반환한다.
    //* 요소.classList.remove("클래스명") : 요소의 특정 클래스 제거
    //* 요소.classList.add("클래스명") : 요소에 특정한 클래스 추가
    //* 요소.classList.toggle("클래스명") : 클래스가 있으면 제거 없으면 추가

    //유효성 검사
    if (regExp8.test(this.value) == true) {
        span.classList.remove('error'); //에러 클래스 제거
        span.classList.add('confirm'); //컨펌 클래스 추가
        span.innerHTML = '유효한 주민등록번호 형식 입니다.';
    } else {
        span.classList.remove('confirm');
        span.classList.add('error');
        span.innerHTML = '주민등록번호 형식이 유효하지 않습니다.';
    }
});
