//* 아이디------------------------------------------------
let idMessage = $("span[name = 'idErrorMessage']");
$('#inputID').on('input', function () {
    const regEx = /^[a-zA-Z\d]{6,10}$/;

    console.log($(this).val());

    if (regEx.test($(this).val())) {
        $('#idCheck').css('color', '#3880e8');
        idMessage.text('');
    } else if (!regEx.test($(this).val())) {
        $('#idCheck').css('color', '#dc3340');
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
        $('#pwCheck').css('color', '#3880e8');
        pwMessage.text('');
    } else if (!regEx.test($(this).val())) {
        $('#pwCheck').css('color', '#dc3340');
        pwMessage.text(
            '띄어쓰기 없는 8~15자의 영문 대/소문자, 숫자 또는 특수문자 조합으로 입력하셔야 합니다.'
        );
    }
});

$('#inputPW').blur(function () {
    $('#inputPW').css('backgroundColor', '');
    if ($(this).val().length == 0) {
        $('#pwCheck').css('color', '#dc3340');
        pwMessage.text('필수 정보입니다.');
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
        $('#pwConfirmcheck').css('color', '#3880e8');
    } else {
        pwConfirmMessage.text('');
        pwConfirmMessage.css('color', '#dc3340');
        pwConfirmMessage.text('비밀번호가 일치하지 않습니다.');
        $('#pwConfirmcheck').css('color', '#dc3340');
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
        $('#nameCheck').css('color', '#3880e8');
        nameMessage.text('');
    } else if (!regEx.test($(this).val())) {
        $('#nameCheck').css('color', '#dc3340');
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
$("input[name ='gender']").change(function () {
    const gender = $("input[name ='gender']");
    if (gender[0].checked || gender[1].checked) {
        $('#genderCheck').css('color', '#3880e8');
    }
});

//*전화번호------------------------------------------------
const middle = $('#middleOfPh').val();
const end = $('#endOfPh').val();
const message = $("span[name = 'phErrorMessage']");

$('.inputPh').on('click', function () {
    $('#divisionLine').css('color', 'black');
});
$('.inputPh').blur(function () {
    $('#divisionLine').css('color', 'white');
    if (middle.length == 0 || end.length == 0) {
        message.css('color', '#dc3340');
        message.text('전화번호를 정확히 입력 해 주세요');
    }
});

$('.inputPh').on('input', function () {
    const regEx = /^[0-9]{3,4}$/;
    if (regEx.test(middle) && regEx.test(end)) {
        $('#phCheck').css('color', '#3880e8');
        message.text('');
    } else {
        message.text('');
        message.css('color', '#dc3340');
        message.text('전화번호를 정확히 입력 해 주세요');
    }
});

//이메일

//가입버튼
let genderMessage = $("span[name = 'genderErrorMessage']");
function validate() {
    if (!gender[0].checked && !gender[1].checked) {
        genderMessage.test('필수 정보입니다.');
        $('#genderCheck').css('color', '#dc3340');
        return false;
    }
}
