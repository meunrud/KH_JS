//* 아이디------------------------------------------------
let idMessage = $("span[name = 'idErrorMessage']");
$('#inputID').on('input', function () {
    const regEx = /^[a-zA-Z\d]{6,10}$/;

    console.log($(this).val());

    if (regEx.test($(this).val())) {
        $('#idCheckimg').attr('src', '');
        $('#idCheckimg').attr('src', 'img/파란체크.png');
        $('#inputID').css('backgroundColor', 'white');
        idMessage.css('color', '#3880e8');
        idMessage.text('사용가능한 아이디입니다.');
    } else if (!regEx.test($(this).val())) {
        $('#idCheckimg').attr('src', 'img/검정체크.png');
        idMessage.text(
            '회원 아이디(ID)는 띄어쓰기 없이 6~10자리의 영문자와 숫자 조합만 가능합니다.'
        );
    }
});

$('#inputID').blur(function () {
    $('#inputID').css('backgroundColor', '');
    if ($(this).val().length == 0) {
        $('#idCheck').css('color', '#dc3340');
        idMessage.text('필수 정보입니다.');
    } else {
        $('#inputID').css('backgroundColor', 'white');
    }
});

$('#inputID').focus(function () {
    $('#inputID').css('backgroundColor', 'white');
});

//*비밀번호------------------------------------------------
let pwMessage = $("span[name = 'pwErrorMessage']");
$('#inputPW').on('input', function () {
    const regEx = /^(?=.*?[A-Za-z)(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,15}$/;
    console.log($(this).val());

    if (regEx.test($(this).val())) {
        $('#pwCheckimg').attr('src', '');
        $('#pwCheckimg').attr('src', 'img/파랑자물쇠.png');
        pwMessage.css('color', '#3880e8');
        pwMessage.text('적정수준의 안전한 비밀번호입니다.');
    } else if (!regEx.test($(this).val())) {
        $('#pwCheckimg').attr('src', 'img/검정자물쇠.png');
        pwMessage.text('비밀번호 조합기준에 적합하지 않습니다.');
    }
});

$('#inputPW').blur(function () {
    $('#inputPW').css('backgroundColor', '');
    if ($(this).val().length == 0) {
        $('#pwCheck').css('color', '#dc3340');
        pwMessage.text(
            '띄어쓰기 없는 8~15자의 영문 대/소문자, 숫자 또는 특수문자 조합으로 입력하셔야 합니다.'
        );
    }
});

$('#inputPW').focus(function () {
    $('#inputPW').css('backgroundColor', 'white');
});

//*비밀번호 확인------------------------------------------------
let pwConfirmMessage = $("span[name = 'pwConfirmErrorMessage']");
$('#pwConfirm').on('input', function () {
    const pw = $('#inputPW').val();
    console.log(pw == $(this).val());
    if (pw === $(this).val()) {
        pwConfirmMessage.text('');
        $('#pwConfrimCheckimg').attr('src', '');
        $('#pwConfrimCheckimg').attr('src', 'img/파랑자물쇠.png');
    } else {
        pwConfirmMessage.text('');
        pwConfirmMessage.css('color', '#dc3340');
        pwConfirmMessage.text('비밀번호가 일치하지 않습니다.');
        $('#pwConfrimCheckimg').attr('src', 'img/검정자물쇠.png');
    }
});
$('#pwConfirm').blur(function () {
    $('#pwConfirm').css('backgroundColor', '');
    if ($(this).val().length == 0) {
        pwConfirmMessage.css('color', '#dc3340');
        pwConfirmMessage.text('필수 정보입니다.');
    }
});

//*이름------------------------------------------------
let nameMessage = $("span[name = 'nameErrorMessage']");
$('#inputName').on('input', function () {
    const regEx = /^[가-힣]{2,5}$/;
    console.log($(this).val());

    if (regEx.test($(this).val())) {
        $('#nameCheckimg').attr('src', '');
        $('#nameCheckimg').attr('src', 'img/파란체크.png');
        nameMessage.text('');
    } else if (!regEx.test($(this).val())) {
        $('#nameCheck').css('color', '#dc3340');
        $('#nameCheckimg').attr('src', 'img/검정체크.png');
        nameMessage.text('한글로 입력해 주세요');
    }
});

$('#inputName').blur(function () {
    $('#inputName').css('backgroundColor', '');
    if ($(this).val().length == 0) {
        $('#nameCheck').css('color', '#dc3340');
        nameMessage.css('color', '#dc3340');
        nameMessage.text('필수 정보입니다.');
    }
});

//*성별------------------------------------------------
let genderMessage = $("span[name = 'genderErrorMessage']");
$("input[name ='gender']").change(function () {
    const gender = $("input[name ='gender']");
    if (gender[0].checked || gender[1].checked) {
        $('#genderCheckimg').attr('src', '');
        $('#genderCheckimg').attr('src', 'img/파란체크.png');
    } else {
        if (!gender[0].checked && !gender[1].checked) {
            genderMessage.test('필수 정보입니다.');
            $('#genderCheckimg').attr('src', 'img/검정체크.png');
            return false;
        }
    }
});

//*전화번호------------------------------------------------
let middle = $('#middleOfPh');
let end = $('#endOfPh');
let phMessage = $("span[name = 'phErrorMessage']");

$('.inputPh').on('click', function () {
    $('#divisionLine').css('color', 'black');
});
$('.inputPh').blur(function () {
    $('#divisionLine').css('color', 'white');
    if (middle.val().length == 0 || end.val().length == 0) {
        phMessage.css('color', '#dc3340');
        phMessage.text('전화번호를 정확히 입력 해 주세요');
    } else if (middle.val().length > 0 || end.val().length > 0) {
        $('#divisionLine').css('color', 'black');
    }
});

$('.inputPh').on('input', function () {
    const regEx1 = /^[0-9]{3,4}$/;
    const regEx2 = /^[0-9]{4}$/;

    if (regEx1.test(middle.val()) && regEx2.test(end.val())) {
        $('#phCheckimg').attr('src', '');
        $('#phCheckimg').attr('src', 'img/파란체크.png');
        $('#divisionLine').css('color', 'black');
        phMessage.text('');
    } else {
        phMessage.text('');
        phMessage.css('color', '#dc3340');
        phMessage.text('전화번호를 정확히 dd입력 해 주세요');
        $('#phCheckimg').attr('src', 'img/검정체크.png');
    }
});

//*이메일------------------------------------------------
let email = $('#inputEmail');
let adress = $('#inputAdress');
let emailMessage = $("span[name ='emailErrorMessage']");

function selectAdress() {
    const select = $('#adress option:selected').val();
    console.log($('#atMark').css('color'));
    adress.val('');
    adress.val(select);

    if (adress.val().length > 0) {
        $('#atMark').css('color', '');
        $('#atMark').css('color', 'black');
    }
}

$('.email').on('propertychange change keyup paste input', function () {
    const regEx1 = /^[a-z0-9_\.-]{2,10}$/;
    const regEx2 = /^[a-z.]{2,10}$/;

    if (regEx1.test(email.val()) && regEx2.test(adress.val())) {
        emailMessage.text('');
    } else {
        emailMessage.css('color', '#dc3340');
        emailMessage.text('이메일 주소를dd 다시 확인 해 주세요');
    }
});

$('.email').on('click', function () {
    $('#atMark').css('color', '');
    $('#atMark').css('color', 'black');
});
$('.email').blur(function () {
    if (email.val().length == 0 && adress.val().length == 0) {
        $('#atMark').css('color', '');
        $('#atMark').css('color', 'white');
    }
});

$('#inputEmail').blur(function () {
    if (email.val().length > 0) {
        $('#atMark').css('color', '');
        $('#atMark').css('color', 'black');
        emailMessage.text('');
    } else if ((email.val().length = 0)) {
        $('#atMark').css('color', '');
        $('#atMark').css('color', 'white');
        emailMessage.css('color', '#dc3340');
        emailMessage.text('이메일 주소를 다시 확인 해 주세요');
    }
});

$('#inputAdress').blur(function () {
    console.log($('#atMark').css('color'));
    console.log(adress.val().length);
    if (adress.val().length > 0) {
        $('#atMark').css('color', '');
        $('#atMark').css('color', 'black');
        emailMessage.text('');
    } else if (adress.val().length == 0) {
        $('#atMark').css('color', '');
        $('#atMark').css('color', 'white');
        emailMessage.css('color', '#dc3340');
        emailMessage.text('이메일 주소를 다시 확인 해 주세요');
    }
});
//*가입버튼------------------------------------------------

// function validate() {
//     if()
// }
