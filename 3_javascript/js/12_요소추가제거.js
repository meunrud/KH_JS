//*추가 버튼 (add)가 클릭되었을 때
document.getElementById("add").addEventListener("click", function () {
    //div 요소
    const div = document.createElement("div");

    //div에 row 클래스 추가
    div.classList.add("row");

    //*------------------------------------------------

    // input 요소
    const input = document.createElement("input");

    //input에 in class 추가
    input.classList.add("in");

    //input에 "type" 속성, "number" 속성값 추가 (type = "number")
    //- 요소.setAttribute("속성", "속성값") : 요소에 속성/속성값 추가
    input.setAttribute("type", "number");

    //*------------------------------------------------

    //sapn 요소
    const span = document.createElement("span");

    //span에 remove 클래스 추가
    span.classList.add("remove");

    //span의 내용으로 "X" 추가

    span.innerText = "X";

    //span이 클릭되었을 때 이벤트 동작 추가
    //요소.parentElement : 부모 요소
    //요소. remove() : 요소 제거
    span.addEventListener("click", function () {
        const parentElement = span.parentElement;
        parentElement.remove();
    });

    //*------------------------------------------------

    //div 내부에 (자식으로) Input, sapn 순서대로 추가
    div.append(input);
    div.append(span);

    //#container에 div를 마지막 자식으로 추가
    document.getElementById("container").append(div);
});
