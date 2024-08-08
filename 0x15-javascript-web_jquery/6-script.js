// jQuery ready function
$(document).ready(function() {
    // Bind click event to <div id="update_header">
    $('#update_header').click(function() {
        // Update the text of the <header> element
        $('header').text('New Header!!!');
    });
}); 

