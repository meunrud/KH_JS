//*객체 생성 1
document.getElementById("btn1").addEventListener("click", function () {
    const div1 = document.getElementById("div1");

    //{} 객체 리터럴 표기법으로 객체 생성
    //! 중요
    //자바 스크립트 객체의 key는 무조건 String(묵시적)
    //"Key" 또는 'key' 또는 key → 모두 String 으로 인식

    const brand = "coffee bean";
    const product = {
        pName: "Tumbler",
        brand: "Starbucks",
        color: ["white", "black", "silver"],
        price: 35000,

        //기능(메서드)
        mix: function () {
            console.log("섞기 시작합니다.");
        },

        information: function () {
            //같은 객체 내부의 다른 속성을 호출하고 싶은 경우
            //현재 객체를 뜻하는 this를 앞에 붙여야 된다.
            //* → this 작성 시 내부 객체 호출
            console.log(this.brand);
            console.log(this.pName);
            console.log(this.price);
            console.log(this.color);
            console.log(brand);
        },
    };
    //결과 출력
    div1.innerHTML = ""; // div1 내부 내용 삭제
    div1.innerHTML += "product.pName : " + product.pName + "<br>";
    div1.innerHTML += "product.brand : " + product.brand + "<br>";
    div1.innerHTML += "product.color : " + product.color + "<br>";
    div1.innerHTML += "product.price : " + product.price + "<br>";

    div1.innerHTML += "<hr>";

    //*자바 스크립트 객체용 향상된 for문 (for in)
    //* → 객체 내부에 작성된 key를 순서대로 하나씩 꺼내온다.
    for (let key in product) {
        div1.innerHTML += key + " : " + product[key] + "<br>";
        //product.key → product의 "key" 로 정의된 값 의미
    }

    div1.innerHTML += "<hr>";

    //객체 메소드 호출
    product.mix();
    product.information();
});

//* 생성자 함수 (자바의 생성자를 함수로 작성하는 모양)
//* 1. 생성자 함수 정의 (생성자 함수명은 대문자로 시작)
function Student(name, grade, ban) {
    //* 속성
    //* this == 생성되는 객체
    this.name = name; //생성되는 객체 name 에 매개 변수 name 을 대입
    this.grade = grade; // 생성되는 객체 grade 에 매개변수 grade 를 대입
    this.ban = ban;
    //* 기능(메서드)
    this.intro = function () {
        console.log(grade + "학년 " + ban + "반 " + name + "입니다.");
    };
}

//*2. 생성자 함수 호출(new 연산자)
document.getElementById("btn2").addEventListener("click", function () {
    const std1 = new Student("홍길동", "3", "2");
    const std2 = new Student("홍길연", "2", "1");
    const std3 = new Student("홍진동", "1", "4");

    console.log(std1);
    console.log(std2);
    console.log(std3);

    //*생성자 함수 사용 이유 : 같은 형태의 객체가 다수 필요한 경우에 사용
    //* 코드 길이가 감소하고 재사용성이 증가함.

    //콘솔에 std1 이름과 자기소개
    console.log(std1.name);
    std1.intro();
});
