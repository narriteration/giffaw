$(document).on("ready", function(){

    $('form').on('submit', function getGifImages(e) {
        e.preventDefault();

        var userData = $('form').serialize();
        var endpoint = 'http://api.giphy.com/v1/gifs/search';

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
    successJson.data.forEach(function(el){
        var isUrl = el.images.fixed_height.url;
        var images = new Image();
            images.src = isUrl;
            $(".gif-gallery").append(images);
    });
// incorrect:    successJson.forEach(data.images.fixed_height.url);
};

function onError(errorJson, status, errorThrown) {
    console.log(errorThrown)
}




});
