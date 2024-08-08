// jQuery ready function
$(document).ready(function() {
    // Bind click event to <div id="toggle_header">
    $('#toggle_header').click(function() {
        // Toggle the class between 'red' and 'green'
        $('header').toggleClass('red green');
    });
});

