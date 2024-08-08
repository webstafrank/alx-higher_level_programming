// jQuery ready function
$(document).ready(function() {
    // Bind click event to <div id="add_item">
    $('#add_item').click(function() {
        // Create a new <li> element
        const newItem = $('<li>Item</li>');
        // Append the new <li> element to the <ul> with class 'my_list'
        $('.my_list').append(newItem);
    });
});

