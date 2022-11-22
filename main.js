$(document).ready(function() {

    var contador = 0;

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('input').val();
        contador ++;
        const novaLinha = $(`<li id="${contador}">${novaTarefa}</li>`);
        $(novaLinha).appendTo('ul');
        $('input').val('');
    });

    $('ul').on('click','li',function() {
        var identificador = $(this).attr('id');
        $(`#${identificador}`).css("text-decoration", "line-through");
    })

});
