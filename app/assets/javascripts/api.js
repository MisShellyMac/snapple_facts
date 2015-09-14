$(function() {
  $(".find").click(function(event){
    event.preventDefault();
    displayResults("/search/" + $("#searchNum").val());
    $("#searchNum").val("");
  });
  $(".random").click(function(event){
    event.preventDefault();
    displayResults("/random");
  });
  $(".all").click(function(event){
    event.preventDefault();
    displayResults("/all");
  });
});

function displayResults(url)
{
  $("#searchResults").html("<b>Loading...</b>");

  $.ajax(url, {
    type: "GET",
    success: function (data) {
      $("#searchResults").empty();

      if (data === undefined)
      {
        $("#searchResults").append("TODO UNDEFINED");
        /*
        $("#searchResults").append("<p>You apparently have a horribly singular taste in 'good' music. Try searching for someone else and in the meantime, enjoy this Rick Roll while you think about what you've done...🐵 🙈 🙉 🙊</p><br>");

        var rickRollVideoId = "dQw4w9WgXcQ";

        $("#searchResults").append(
        "<iframe width='840' height='630' src='https://www.youtube.com/embed/" +
        rickRollVideoId + "?autoplay=1' frameborder='0' allowfullscreen></iframe>");
        */
      }
      else {
        for (var i = 0; i < data.length; i++)
        {
            $("#searchResults").append(
            "<p>Fact #" + data[i].numberid + ": " + data[i].fact + "</p>");
            console.log(data[i]);
        }
      }
    }
  });
}
