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
        var imageUrl = response.data[0].images.original.url;
            console.log(response.data);
        var gifImage = $("<img>");
        gifImage.attr("src", imageUrl);
        gifImage.attr("alt", "gif image");
        $("#images").prepend(gifImage);
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
            console.log("gifItem",gifItem);
        gifButton =$("<button>");
            console.log("gifButton",gifButton);
        gifCount++;
            console.log("gifCount",gifCount);
        gifID=gifItem;
            console.log("gifID",gifID);
        gifButton.attr("id", gifID);
        gifButton.text(gifItem);
        gifButton.on('click',function(){
            console.log("FOCUS HERE", this.id);
            createGifs(this.id);
        });
        $("#buttons").append(gifButton);
            console.log("New Button Added",$(gifButton).val());
        $("#gifphy").val("");
});
// $("#gif-button").click(createGifs(this.id), console.log("CLICK!"));