$(document).ready(function() {
    function fetchTranslation() {
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
    }

    // Fetch translation on button click
    $('#btn_translate').click(function() {
        fetchTranslation();
    });

    // Fetch translation on Enter key press
    $('#language_code').keypress(function(event) {
        if (event.which === 13) { // Enter key pressed
            fetchTranslation();
        }
    });
});

