function selectCategory(){
    const bookList = document.getElementsByName("hooby");

    let str = "";
    

    for(let i=0; i< bookList.length; i++){
        if(bookList[i].checked){
            str += bookList[i].value +" ";
        }
    }

    document.getElementById("result").innerHTML = str;

}

function selectAll(){
    const bookList = document.getElementsByName("hooby");
    const all = document.getElementById("all");
   /* 
    let str = "";

    if(all.checked){
        for(let i=0; i< bookList.length; i++){
            str += bookList[i].value +" ";
        }
    }
    document.getElementById("result").innerHTML = str;
    */
    //2번째 방법

    for(let i = 0; i<bookList.length; i++){
        bookList[i].checked = all.checked;
    }
    
}

function selectCancel(){
    const bookList = document.getElementsByName("hooby");
    const all = document.getElementById("all");

    for(let i = 0; i<bookList.length; i++){
        all.checked = false;
        bookList[i].checked = false;
    }

    document.getElementById("result").innerHTML = "";

}