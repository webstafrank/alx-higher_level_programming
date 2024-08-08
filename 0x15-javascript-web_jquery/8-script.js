// jQuery ready function
$(document).ready(function() {
    // Define the URL
    const url = 'https://swapi-api.alx-tools.com/api/films/?format=json';
    
    // Perform AJAX GET request
    $.get(url, function(data) {
        // Extract the list of films
        const films = data.results;
        
        // Iterate over each film and create <li> elements
        films.forEach(function(film) {
            const listItem = $('<li></li>').text(film.title);
            // Append each <li> element to the <ul> with ID 'list_movies'
            $('#list_movies').append(listItem);
        });
    }).fail(function() {
        // Handle errors
        $('#list_movies').append('<li>Failed to fetch movie titles</li>');
    });
});

