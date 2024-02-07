

// Reference the auto-generated proxy for the hub.  
var chat = $.connection.chathub;


// Create a function that the hub can call back to display messages.
chat.client.addNewMessageToPage = function (name, message) {


    var li = document.createElement('li');

    li.innerText = `${name} : ${message}`;

    // Add the message to the page. 
    $('#discussion').append(li);
};


// Get the user name and store it to prepend to messages.
var username = prompt('Enter your name:', 'DITC');
// Set initial focus to message input box.  
$('#message').focus();
// Start the connection.
$.connection.hub.start();





$('#sendmessage').click(function () {

    // Call the Send method on the hub.
    var msg = $('#message').val();

    chat.server.sendMessage(username, msg);
    // Clear text box and reset focus for next comment. 
    $('#message').val(null).focus();
});

