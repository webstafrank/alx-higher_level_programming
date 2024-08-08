// jQuery ready function
$(document).ready(function() {
    // Bind click event to <div id="red_header">
    $('#red_header').click(function() {
        // Add the class 'red' to the <header> element
        $('header').addClass('red');
    });
});

