$(document).ready(function() {
    console.log('is running');
    $("#content").html('Carregando...')
})


function testApi() {
    $.ajax({
            method: "GET",
            url: "https://200.141.127.130:443/projetos/lorem-api/test",
        })
        .done(function(data) {
            data = JSON.parse(data);
            data = data.result;
            $("#content").html(data.msg)


        });
}