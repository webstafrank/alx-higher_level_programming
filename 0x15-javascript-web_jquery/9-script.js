// jQuery ready function
$(function() {
    // Define the URL
    const url = 'https://hellosalut.stefanbohacek.dev/?lang=fr';
    
    // Perform AJAX GET request
    $.get(url, function(data) {
        // Extract the value of 'hello' from the response
        const helloText = data.hello;
        // Update the <div> with ID 'hello'
        $('#hello').text(helloText);
    }).fail(function() {
        // Handle errors
        $('#hello').text('Failed to fetch greeting');
    });
});

