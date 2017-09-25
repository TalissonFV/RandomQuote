var urlQuote = "http://random-quote-generator.herokuapp.com/api/quotes/";
$(document).ready(function() {
    do
    {
        var x = 0;
	    $('#get-another-quote-button').on("click", function() {
	        $.getJSON(urlQuote, function(data) {
                 x = Math.floor((Math.random()*data.length) + 1);
	            $('#quote-content').empty();           
	            $('#quote-content').append('<blockquote> "' + data[x].quote + '" </blockquote>' + '<p> —  ' + data[x].author + '</p>');
	        });
	    });
	}
	while (data.quote[x].length>140); //Repeat the process if the quote is bigger than 140 characters
});