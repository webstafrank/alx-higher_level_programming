$(document).ready(function() {
    $('#btn_translate').click(function() {
        const languageCode = $('#language_code').val();
        $.ajax({
            url: 'https://www.fourtonfish.com/hellosalut/hello/',
            data: { lang: languageCode },
            success: function(response) {
                $('#hello').text(response.hello);
            },
            error: function() {
                $('#hello').text('Error fetching translation');
            }
        });
    });
});

