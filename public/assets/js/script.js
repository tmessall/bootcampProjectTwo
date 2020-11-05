



$("#submission").on("click", function (event) {
    console.log("click");
    event.preventDefault();
    var newItem = {
      name: $(".product").val(),
      username : $(".Uname").val(),
      description : $(".description").val()
    };
    console.log(newItem);
    $.ajax("/api/products", {
      type: "POST",
      data: newItem
    }).then(function () {

      location.reload();
      console.log("added a new order");
    })
  });


  