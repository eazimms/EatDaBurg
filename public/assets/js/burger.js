$(function() {

  $(".create-form").on("submit", function(event){
    event.preventDefault(); 

    var newBurger = {
      burger_name: $("#newBurger").val().trim(), 
      devoured: 0
    }; 

    $.ajax("/api/burgers", {
      type: "POST", 
      data: newBurger
    }).then(function(){
      location.reload(); 
    }); 
  }); 

  $("#devourbutton").on("click", function(event){
    event.preventDefault(); 
    console.log("tracking this")

    var id = $(this).data("id"); 
    var devouredState = {
      devoured: 1
    }; 

    $.ajax("/api/burgers/" + id, {
      type: "PUT", 
      data: devouredState
    }).then(function(){
      location.reload(); 
    }); 
  }); 

  $("#deleyeet").on("click", function(event) {
    event.preventDefault(); 
    console.log("deleting this?")

    var id = $(this).data("id"); 

    $.ajax({
      type: "DELETE", 
      url: "/api/burgers/" + id
    }).then(location.reload()); 
  }); 
}); 