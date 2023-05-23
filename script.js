$(document).ready(function () {
    let iframe = $('#iframe');
    let urlInput = $('#url');

    // This Function Will Load The URL
    function loadURL(url) {
        if (!url.match(/^(http|https):\/\//i)) {
            url = 'https://' + url;
        }
        iframe.attr('src', url);
    }
    loadURL('pabitrabanerjee.newsgoogle.org');
    //  GO Button
    $('#go').click(function () {
        let url = urlInput.val();

        if (url) {
            loadURL(url);
        }
    });

    urlInput.keypress(function (event) {
        if (event.which === 13) {
            $('#go').click();
            return false;
        }
    });
    //  BACK Button
    $('#back').click(function () {
        history.back();
    });

    // Forward Button 
    $('#forward').click(function () {
        history.forward();
    });

    // Refresh Button
    $('#refresh').click(function () {
        iframe.attr('src', iframe.attr('src'));
    });
});