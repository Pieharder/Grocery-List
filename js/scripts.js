$(document).ready(function() {
  $("#groceries").submit(function(event) {
    event.preventDefault();

    var groceries = [$("input#item1").val(), $("input#item2").val(), $("input#item3").val()];
    
    var newGroceries = [];
    groceries.forEach(function(items) {
      var Items = items.toUpperCase();
      newGroceries.push(Items);
    
    newGroceries.sort();
    
    });

    newGroceries.forEach(function(groceries) {
      $("#result").prepend("<ul>" + "</ul>").append("<li>" + groceries + "</li>");
    });
    console.log(groceries)
    console.log(newGroceries)
    $("#groceries").hide();
  });
});