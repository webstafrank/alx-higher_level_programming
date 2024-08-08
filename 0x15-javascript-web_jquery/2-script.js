// jQuery ready function
$(document).ready(function() {
    // Bind click event to <div id="red_header">
    $('#red_header').click(function() {
        // Change the text color of <header> to red (#FF0000)
        $('header').css('color', '#FF0000');
    });
});
