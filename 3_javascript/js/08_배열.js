//배열 확인 1
document.getElementById("btn1").addEventListener("click", function () {
    // 배열 선언 방법 1.
    const arr1 = new Array(3); //3칸 짜리 배열 생성

    const arr2 = new Array(); //0칸 짜리 배열 생성

    console.log(arr1); //(3) [비어 있음 x 3]
    console.log(arr2); //[]

    // 다른 자료형 대입
    arr1[0] = "김밥";
    arr1[1] = 123;
    arr1[2] = true;
    console.log(arr1); //(3) ['김밥', 123, true]

    // 0칸 배열에 대입 -> 자동으로 길이 증가
    arr2[0] = "김밥";
    arr2[1] = 123;
    arr2[2] = true;
    console.log(arr2); //(3) ['김밥', 123, true]

    // 배열 선언 방법 2.
    const arr3 = []; // 비어있는 배열(0칸)
    const arr4 = ["사과", "딸기", "바나나"]; //선언 및 초기화

    // for 문으로 배열 요소 반복 접근하기
    // 1. 일반 for문
    for (let i = 0; i < arr4.length; i++) {
        console.log(arr4[i]);
    }

    // 2. 향상된 for문 (for...of) : 배열용 향샹된 for문
    for (let i of arr4) {
        console.log(i);
    }
});

//배열 확인 2
document.getElementById("btn2").addEventListener("click", function () {
    //비어 있는 배열 생성
    const arr = [];

    // push() : 배열 마지막 요소로 추가
    arr.push("닭발");
    arr.push("닭도리탕");
    arr.push("곱창");
    arr.push("초밥");
    console.log(arr);

    // pop() : 배열 마지막 요소 꺼내오기
    console.log("꺼내온 요소 : " + arr.pop()); //꺼내온 요소 : 초밥
    console.log(arr); //(3) ['닭발', '닭도리탕', '곱창']

    // 배열.indexOf("값")  : 일치라는 값을 가진 요소의 index를 반환
    console.log("초밥 인덱스 : " + arr.indexOf("닭도리탕")); // 1
    console.log("갈비 인덱스 : " + arr.indexOf("갈비")); // -1

    // 배열.sort([정렬기준 함수]) : 배열 내 요소를 오름차순 정렬(문자열)
    const arr2 = [5, 3, 2, 10, 1];
    console.log(arr.sort()); // 곱창, 닭도리탕,, 닭발
    console.log(arr2.sort()); // 1, 10, 2, 3, 5  -> 문자로 취급
    // 왜? 문자열로 변환되서 정렬되기 때문에
    // (문자열 정렬 기준이 가본값)

    // 숫자 오름 차순 정렬
    console.log(
        arr2.sort(function (a, b) {
            return a - b;
        })
    ); //1,2,3,5,10 //양수면 바뀌고 음수면 그대로 있으면서 정렬됨

    // 문자열로 출력
    console.log(arr.toString()); //곱창,닭도리탕,닭발
    console.log(arr.join("/")); // 곱창/닭도리탕/닭발 -> ',' 를 '/'로 바꿔서 출력됨
});
