$('div').on("click", function(){

    if( $(this).next("p").css("display") == "none" ){
        
        $(this).siblings("p.contents").slideUp();

        $(this).next().slideDown();


    } else{
        $(this).next().slideUp();
    }
});
