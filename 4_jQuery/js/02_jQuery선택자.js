//*태그 선택자

//* ready()함수 : 문서가 로딩된 후 마지막에 수행하는 함수
$(document).ready(function () {
    //*jQuery 선택자는 css 선택자와 같다.
    $('h5').css('color', 'skyblue');
    $('p').css('color', 'pink');

    //!자바스크립트로 했을 때
    //document.getElementsbyTagName("p").style.color = "red";
    //!→ 배열에 스타일을 적용할 수 없다.

    const arr = document.getElementsByTagName('p');
    for (let i of arr) {
        i.style.color = 'gray';
    }
    //* → 배열에서 요소를 하나씩 꺼내서 적용하는건 가능하나 불편하다.

    //* h5, p 두 태그에 동시에 배경색을 green으로 지정하기
    $('h5, p').css('backgroundColor', 'beige');
});

//* 클래스 선택자
$(document).ready(function () {
    //* 클래스가 item인 요소의 글자색을 orange로 변경

    $('.item').css('color', 'orange');

    //* 클래스가 select 요소의 배경색을 yellowgreen으로 변경
    $('.select').css('backgroundColor', 'yellowgreen');

    //* 클래스가 item,select를 동시에 가지고 있는 요소만 글자 크기 10px 로 변경
    $('.item, .select').css('fontSize', '10px');
});

//* 아이디 선택자
const regExp = /^[a-z][a-zA-Z0-9]{7,19}$/;
///^([a-z]{1})([a-zA-Z0-9]{7,19})$/;

$('#input1').on('input', function () {
    //*on() == addEventListener
    //*→ 특정 이벤트 발생 시 동작(이벤트 핸들러) 지정
    //*input 이벤트 : 입력과 관련된 모든 행위
    //* .val() == .value

    //* 1) 작성된 값이 정규표현식에 맞는 형식인지 검사
    if (regExp.test($('#input1').val())) {
        //* $("#input1").val() : 아이디가 input1인 요소에 작성된 값(value)을 얻어옴

        //* 2) 정규식 결과에 따라 내용 출력
        $('#span1').text('유효한 문자열 형식입니다.');

        //글자색 green
        $('#span1').css('color', 'green');
    } else {
        //만약 유효하지 않다면 "유효하지 않은 문자열 형식입니다." 글씨 red
        $('#span1')
            .text('유효하지 않은 문자열 형식입니다.')
            .css('color', 'red');
        //* 메소드 체이닝 : 하나의 대상에 대하여 여러 메소드를 연달아 작성하는 기술
    }
});

//* 자식, 후손 선택자
//* 제일 간단한 형태의 ready()함수
$(function () {
    //$('.area h4').css('color', 'red');
    $('.area > h4').css('color', 'red');
    $('.area > ul > .qqq').css('backgroundColor', 'green');

    //area 클래스에서 qqq클래스 폰트 사이즈를 30px로 변경
    $('.area .qqq').css('fontSize', '30px');

    //내용이 "사과" 인 요소 배경 빨강, 글자 흰색으로 변경
    $('.area > ul > li > h4')
        .css('backgroundColor', 'red')
        .css('color', 'white');
});

//속성 선택자
$('#check').on('click', function () {
    //*name 속성 값이 gender인 요소 선택
    // console.log($("input[name='gender']"));

    //*name 속성 값이 gender 인 요소 중 체크된 요소 선택
    //*.checked = :checked → 체크된 요소만 선택
    const gender = $("input[name='gender']:checked");

    console.log(gender.length);
    //* 아무것도 check 안함 : 0, 체크 하면 : 1

    //* 변수 gender 는 Javascript 방식의 변수이다. → 이후 gender를 단순하게 호출하게 되면 Javascript방식으로 사용해야 함.
    //* radio 버튼이 하나도 선택되지 않은 경우
    if (gender.length == 0) {
        alert('남자 또는 여자 중 하나를 선택해 주세요.');
    } else {
        //* 1) 체크된 요소를 모두 얻어왔으므로 배열 형태로 저장된 gender 변수에서 0변 인덱스의 value만 얻어오기
        console.log(gender[0].value);

        //* 2) 체크된 요소를 모두 얻어와도 radio는 1개만 체크되어 있기 때문에 변수 한개랑 같다라고 해석하여
        //*     자동으로 0번 인텍스 요소에 있는 value 얻어옴 (JS + jQuery)
        console.log(gender.val());

        //* 3) 순수 jQuery
        console.log($(gender).val());
        //! $(gender) : 체크된 요소만 담긴 배열 + 요소만 선택해라 → 체크된 radio 버튼을 선택하는 jQuery 선택자.
        alert($(gender).val() + '자를 선택하셨습니다.');
    }
});

//* prop() 메서드
$('#btn1').on('click', function () {
    const arr = $("input[name='hobby']");
    let str = ''; //체크된 요소의 value 값을 누적해서 저장할 변수

    console.log(arr.prop('checked'));
    //배열 명을 적을 경우 0번 인덱스만 확인 가능

    for (let i = 0; i < arr.length; i++) {
        //* 각 인덱스 저장된 checkbox 요소가 체크되어있는 상태인지 확인
        console.log(i + ':' + $(arr[i]).prop('checked'));

        if ($(arr[i]).prop('checked')) {
            //*체크된 요소의 value값을 얻어와 str 변수에 누적
            str += $(arr[i]).val() + ' ';
        }
    }
    alert(str);
});
