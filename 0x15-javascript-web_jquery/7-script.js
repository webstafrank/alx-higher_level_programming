// jQuery ready function
$(document).ready(function() {
    // Define the URL
    const url = 'https://swapi-api.alx-tools.com/api/people/5/?format=json';
    
    // Perform AJAX GET request
    $.get(url, function(data) {
        // Extract the character name
        const characterName = data.name;
        // Update the <div> with ID 'character'
        $('#character').text(characterName);
    }).fail(function() {
        // Handle errors
        $('#character').text('Failed to fetch character name');
    });
});

