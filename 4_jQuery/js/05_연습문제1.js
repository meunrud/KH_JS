$('#change').on('click', function () {
    const color = $('#input').val();
    console.log(color);

    $('#first').css('backgroundColor', color);
});

$('#change1').on('click', function () {
    const color = $("input[id='input1']");
    console.log(color);
    let index = 1;

    for (let i = 0; i < color.length; i++) {
        $('#' + index).css('backgroundColor', color[i].value);
        index++;
    }
});
