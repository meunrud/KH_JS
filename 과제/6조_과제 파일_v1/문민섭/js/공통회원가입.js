$(document).ready(function(){
    /* 아이디 유효성 체크 및 기능 구현 부분 */    
    $("#input_Id").on("click", function(){
        $("#login_Id").focus();
        $(this).css("display", "none");
    });
        $("#login_Id").focus(function(){
            const regExp = /^[a-zA-Z\d]{6,10}$/;
            if($(this).on("blur",function(){
                if($(this).val().length != 0){
                    if(regExp.test($(this).val())){
                        $("#idMsg").text("사용가능한 아이디 입니다.");
                        $("#idimgCheck").attr("src", "image/아이디체크완료.png")
                        $("#idMsg").css("color", "blue");
                    } else{
                        $(this).focus();
                        $("#idMsg").text("회원 아이디(ID)는 띄어쓰기 없이 6~10자리의 영문자와 숫자 조합만 가능합니다.");
                        $("#idimgCheck").attr("src", "image/아이디체크.png")
                        $("#idMsg").css("color", "#dc3340");
                    }
                }else{
                    $("#input_Id").css("display", "block");
                    $(this).siblings("p").text("필수 정보입니다.");
                    $("#idimgCheck").attr("src", "image/아이디체크.png")
                    $("#idMsg").css("color", "#dc3340");
                }
            })
        ){}    
    });
    /* 비밀번호 유효성 체크 및 기능 구현 부분 */
    $("#input_Pw").on("click", function(){
        $("#login_Pw").focus();
        $(this).css("display", "none");
    });
        $("#login_Pw").focus(function(){
            const regExp = /^(?=.*?[A-Za-z)(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,15}$/;
            if($(this).on("blur",function(){
                if($(this).val().length != 0){
                    if(regExp.test($(this).val())){
                        $("#pwMsg").text("적정 수준의 안전한 비밀번호 입니다.");
                        $("#pwimgCheck").attr("src", "image/비밀번호체크완료.png")
                        $("#pwMsg").css("color", "blue");
                    } else{
                        $(this).focus();
                        $("#pwMsg").text("비밀번호 조합기준에 적합하지 않습니다.");
                        $("#pwimgCheck").attr("src", "image/비밀번호.png")
                        $("#pwMsg").css("color", "#dc3340");
                    }
                }else{
                    $("#input_Pw").css("display", "block");
                    $(this).siblings("p").text("띄어쓰기 없는 8~15자의 영문 대/소문자, 숫자 또는 특수문자 조합으로 입력하셔야 합니다.");
                    $("#pwimgCheck").attr("src", "image/비밀번호.png")
                    $("#pwMsg").css("color", "#dc3340");
                }
            })
        ){}    
    });
    /* 비밀번호 확인 유효성 체크 및 기능 구현 부분 */
    $("#input_PwConfirm").on("click", function(){
        $("#login_PwConfirm").focus();
        $(this).css("display", "none");
    });
        $("#login_PwConfirm").focus(function(){
            if($(this).on("blur",function(){
                if($(this).val().length != 0){
                    if($(this).val() == $("#login_Pw").val()){
                        $("#pwMsgConfirm").text("");
                        $("#pwConfirmimgCheck").attr("src", "image/비밀번호체크완료.png")
                    } else{
                        // $(this).focus();
                        $("#pwMsgConfirm").text("비밀번호가 일치하지 않습니다.");
                        $("#pwConfirmimgCheck").attr("src", "image/비밀번호.png")
                        $("#pwMsgConfirm").css("color", "#dc3340");
                    }
                }else{
                    $("#input_PwConfirm").css("display", "block");
                    $(this).siblings("p").text("필수 정보입니다.");
                    $("#pwConfirmimgCheck").attr("src", "image/비밀번호.png")
                    $("#pwMsgConfirm").css("color", "#dc3340");
                }
            })
        ){} 
    });
    /* 이름 유효성 체크 및 기능 구현 부분 */
    $("#input_name").on("click", function(){
        $("#login_name").focus();
        $(this).css("display", "none");
    });
        $("#login_name").focus(function(){
            const regExp = /^[가-힣]{2,5}$/;
            if($(this).on("blur",function(){
                if($(this).val().length != 0){
                    if(regExp.test($(this).val())){
                        $("#nameMsg").text("");
                        $("#nameimgCheck").attr("src", "image/아이디체크완료.png")
                    } else{
                        $(this).focus();
                        $("#nameMsg").text("한글만 입력하세요.");
                        $("#nameimgCheck").attr("src", "image/아이디체크.png")
                        $("#nameMsg").css("color", "#dc3340");
                    }
                }else{
                    $("#input_name").css("display", "block");
                    $(this).siblings("p").text("필수 정보입니다.");
                    $("#nameimgCheck").attr("src", "image/아이디체크.png")
                    $("#nameMsg").css("color", "#dc3340");
                }
            })
        ){}    
    });
    /* 성별 선택여부 확인 */
    $("#Check").on("click", function(){
        const gender = $(".gender_input");
         if(!gender[0].checked && !gender[1].checked){
         alert("성별을 선택해주세요.");
         }  
    });
    
    /* 휴대폰번호 유효성 검사 및 기능 구현 부분 */    
    let p_num1 = 0;
    let p_num2 = 0;
    let num_result = 0;

    /************ 휴대폰번호 시작부분 불러오는 기능 *******************/
    let p_num0 = $("#select_phone_num option:selected").val();
    $("#select_phone_num").change(function(){
        p_num0 = $(this).val();
    });
    /****************************************************************/
    const regExpPn = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}$/;

    $("#phone_input_first").on("click", function(){
        $("#phone_num2").focus();
        $(this).css("display", "none");
    });
    $("#phone_num2").focus(function(){
        if($(this).on("blur", function(){
            if($(this).val().length == 0){
                $(this).siblings("p").text("필수 정보입니다.");
                $("#phone_Msg").css("color", "#dc3340");
            }
        })){}

    })
    /* 휴대폰번호 첫번째칸 추출 및 기능 구현 부분 */
    $("#phone_num2").on("propertychange change keyup paste input", function(){
        p_num1 = $("#phone_num2").val();
        p_num2 = $("#phone_num3").val();
        num_result =  p_num0 + "-" + p_num1 + "-" + p_num2;
            $(this).blur(function(){
            if(regExpPn.test(num_result)){
                $("#phone_Msg").text("");
                $("#phoneMsgCheck").attr("src", "image/아이디체크완료.png");
            } else{
                $("#phone_Msg").text("전화번호를 정확히 입력해주세요.");
                $("#phone_Msg").css("color", "#dc3340");
                $("#phoneMsgCheck").attr("src", "image/아이디체크.png");
            }
            if($("#phone_num2").val() == 0 && $("#phone_num3").val() == 0){
                $("#phone_input_first").css("display", "block");
            }
        });
    });
    /* 휴대폰번호 두번째칸 데이터 추출 및 기능 구현 부분 */    
    $("#phone_num3").on("propertychange change keyup paste input", function(){
        p_num1 = $("#phone_num2").val();
        p_num2 = $("#phone_num3").val();
        num_result =  p_num0 + "-" + p_num1 + "-" + p_num2;
            $(this).blur(function(){
            if(regExpPn.test(num_result)){
                $("#phone_Msg").text("");
                $("#phoneMsgCheck").attr("src", "image/아이디체크완료.png");
            } else{
                $("#phone_Msg").text("전화번호를 정확히 입력해주세요.");
                $("#phone_Msg").css("color", "#dc3340");
                $("#phoneMsgCheck").attr("src", "image/아이디체크.png");
            }
            if($("#phone_num2").val() == 0 && $("#phone_num3").val() == 0){
                $("#phone_input_first").css("display", "block");
                $(this).siblings("p").text("필수 정보입니다.");
            }
        });
    });

    /* 이메일 유효성 검사 및 기능 구현 부분 */    
    let email1 = 0;
    let email_result = 0;

    /************ 이메일 서버 부분 불러오는 기능 *******************/
    let email2 = $("#select_email_server option:selected").val();
    $("#select_email_server").change(function(){
        email2 = $(this).val();
        $("#email2").val(email2);
    });
    /****************************************************************/
    const regExpEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    $("#select_email").on("click", function(){
        $("#email1").focus();
        $(this).css("display", "none");
    });
    $("#email1").focus(function(){
        if($(this).on("blur", function(){
            if($(this).val().length == 0){
                $(this).siblings("p").text("필수 정보입니다.");
                $("#email_Msg").css("color", "#dc3340");
            }
        })){}
    /* 이메일 첫번째칸 추출 및 기능 구현 부분 */
    $("#email1").on("propertychange change keyup paste input", function(){
        email1 = $("#email1").val();
        email2 = $("#email2").val();
        console.log(email1);
        email_result = email1 + "@" + email2;
            $(this).blur(function(){
            if(regExpEmail.test(email_result)){
                $("#email_Msg").text("");
            } else{
                $("#email_Msg").text("이메일 주소를 다시 확인해주세요.");
                $("#email_Msg").css("color", "#dc3340");
            }
            if($("#email1").val().length == 0){
                $("#select_email").css("display", "block");
                $(this).siblings("p").text("필수 정보입니다.");
                $("#email_Msg").css("color", "#dc3340");
            }
        });
    });
    /* 이메일 첫번째칸 추출 및 기능 구현 부분 */
    $("#email2").on("change", function(){
        email1 = $("#email1").val();
        email2 = $("#email2").val();
        console.log(email2);
        if($(this) == $("").val()){
            email2 = $(this).val();
        }
        email_result =  email1 + "@" + email2;
            $(this).blur(function(){
            if(regExpEmail.test(email_result)){
                $("#email_Msg").text("");
            } else{
                $("#email_Msg").text("이메일 주소를 다시 확인해주세요.");
                $("#email_Msg").css("color", "#dc3340");
            }
        });
    });
    console.log(email_result);
    });
})
