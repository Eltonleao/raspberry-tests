$(document).ready(function () {
    console.log('is running');

    $.ajax({
        method: "GET",
        url: "https://200.141.127.130:443/projetos/lorem-api/test",
    })
    .done(function (data) {
        data = JSON.parse(data);
        console.log(data);
    });
})