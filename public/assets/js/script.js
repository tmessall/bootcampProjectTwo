



$("#submission").on("click", function (event) {
    console.log("click");
    
    var hash = CryptoJS.MD5("Message");
     console.log(hash.toString());


    event.preventDefault();
    var newItem = {
      name: $(".product").val(),
      username : $(".Uname").val(),
      description : $(".description").val(),
    
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




  