//아이디
document.getElementById('inputId').addEventListener('input', function () {
  const regEx = /^[a-z]{1}([a-zA-z0-9!]){7,14}$/;
  const message = document.getElementById('idMessage');
  const input = document.getElementById('inputId').value;

  console.log(regEx.test(input));
  if (regEx.test(input)) {
    message.innerHTML = '';
    message.innerHTML = '유효한 아이디입니다.';
    message.style.color = 'green';
    message.style.fontSize = '10px';
  } else if (input.length == 0) {
    message.innerHTML = '';
  } else {
    message.innerHTML = '유효하지 않는 아이디입니다.';
    message.style.color = 'red';
    message.style.fontSize = '10px';
  }
});

// 성별 선택
function validator() {
  const gender = document.getElementsByClassName('gender');
  if (!gender[0].checked && !gender[1].checked) {
    alert('성별을 선택해주세요');
    return false;
  }
}

//주소창 클릭
document.getElementById('inputAdress').addEventListener('click', function () {
  const id = document.getElementById('inputId').value;
  const pw = document.getElementById('inputPw').value;
  const pwCheck = document.getElementById('inputPwConfirm').value;

  if (id.length == 0 || pw.length == 0 || pwCheck.length == 0) {
    alert('필수 입력 항목이 작성되지 않았습니다');
  }
});
