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
        $("#searchResults").append("Please input a number between 1 and 1031.");
        /*
        $("#searchResults").append("<p>You apparently have a horribly singular taste in 'good' music. Try searching for someone else and in the meantime, enjoy this Rick Roll while you think about what you've done...🐵 🙈 🙉 🙊</p><br>");
        */
      }
      else {
        for (var i = 0; i < data.length; i++)
        {
          var bottle_cap = $("<div class='cap'> </div>");
          var inner_div = $("<div></div>");

          if (data[i].numberid >= 498 && data[i].numberid <= 650)
          {
            inner_div = $("<div class='piggy'></div>");
          }

          bottle_cap.append(inner_div);
          inner_div.append("<p class='number'>" + data[i].numberid + "</p>");
          inner_div.append("<p class='fact'>" + data[i].fact + "</p>");

          bottle_cap.addClass("spin");

          $("#searchResults").append(bottle_cap);
        }
      }
    }
  });
}
