
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking = $("#park-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking)
    renderApts(relevantApts)
    $("#relevant").text(relevantApts.length).css("color","red")
})

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render
    //Your code goes here.
    
    const source = $('#apt-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({apartments});
    $('#results').append(newHTML);
}

renderApts(apartments) //renders apartments when page loads

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 300) { 
            $('#sticky').fadeIn(); 
        } else { 
            $('#sticky').fadeOut(); 
        } 
    }); 
    $('#sticky').click(function(){ 
        $("html, body").animate({ scrollTop: 300 }, 600); 
        return false; 
    }); 
});



$("#apts").text(apartments.length)