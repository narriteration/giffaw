$(document).on("ready", function(){

    $('form').on('submit', function getGifImages(e) {
        e.preventDefault();

        var userData = ;
        var endpoint = ;

        $.ajax ({
            method: 'GET',
            url: endpoint,
            data: userData,
            dataType: 'json',
            success: onSuccess,
            error: onError,

        });


    });

function onSuccess(successJson) {
    console.log(successJson);
    //
}

function onError(errorJson, status, errorThrown) {
    console.log(errorThrown)
}




});
