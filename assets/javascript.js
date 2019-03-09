// ///////////////////////////////////////VARIABLES////////////////////////////////////
var topics=[];
var gifCount=0;
var gifItem;
var gifButton;
var gifID;
// ///////////////////////////////////////ARRAYS///////////////////////////////////////
// ///////////////////////////////////////FUNCTIONS////////////////////////////////////
// //-----------------------------------------------------------------------------------  gif button creater
$("#gif-button").on("click", function() {
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=ajx51k7HYzwYxx7EkWBKRME3UIbFiJrx&limit=10";
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
});

$("#add-gifButton").on("click", function(event2){
    event2.preventDefault();
        console.log("we clicked da new catagory button");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=ajx51k7HYzwYxx7EkWBKRME3UIbFiJrx&limit=10";
      $.ajax({
          url: queryURL,
          method: "GET"
      })
      .then(function(){
          gifItem=$("#gifphy").val();
              console.log("gifItem",gifItem);
          gifButton =$("<button>");
              console.log("gifButton",gifButton);
          gifCount++;
              console.log("gifCount",gifCount);
          gifID="item-"+ gifCount;
              console.log("gifID",gifID);
          gifButton.attr("id", gifID);
          gifButton.text(gifItem);
          $("#buttons").append(gifButton);
          $("#gifphy").val("");
      })
});
// //-----------------------------------------------------------------------------------  just some routine testings

      