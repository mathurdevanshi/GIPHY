// ///////////////////////////////////////VARIABLES////////////////////////////////////
var topics=[];
var gifCount=0;
var gifItem;
var gifButton;
var gifID;
var person;
var queryURL;
// ///////////////////////////////////////ARRAYS///////////////////////////////////////
// ///////////////////////////////////////FUNCTIONS////////////////////////////////////
// //----------------------------------------------------------------------------------------------  gif creator
function createGifs(buttonName){
    queryURL = "http://api.giphy.com/v1/gifs/search?q="+buttonName+"&api_key=ajx51k7HYzwYxx7EkWBKRME3UIbFiJrx&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        for(var i=0; i<response.data.length; i++){
            var gifDiv=$("<div>");
            var imageUrl = response.data[i].images.original.url;
            var rating=response.data[i].rating;
            var p=$("<p>").text("Rating:"+ rating);
            var gifImage = $("<img>");
            gifDiv.prepend(p);
            gifImage.attr("src", imageUrl);
            gifImage.attr("alt", "gif image");
            $("#images").prepend(gifImage);
            $("#images").prepend(gifDiv);
        }
    });
};
// //----------------------------------------------------------------------------------------------  Handles Default Buttons
$("button").on("click", function(){
    createGifs(this.id);
    });
// //----------------------------------------------------------------------------------------------  Button Creator
$("#add-gifButton").on("click", function(event2){
  event2.preventDefault();
        gifItem=$("#gifphy").val();
        gifButton =$("<button>");
        gifCount++;
        gifID=gifItem;
        gifButton.attr("id", gifID);
        gifButton.text(gifItem);
        gifButton.on('click',function(){
            createGifs(this.id);
        });
        $("#buttons").append(gifButton);
        $("#gifphy").val("");
});
// $("#gif-button").click(createGifs(this.id), console.log("CLICK!"));