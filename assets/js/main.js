$(document).ready(function () {
    console.log('is running');

    $.ajax({
        method: "GET",
        url: "http://200.141.127.130:210/projetos/lorem-api/FRAMEWORK/test",
    })
        .done(function (data) {
            console.log(data);
        });
})