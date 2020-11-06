



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


  $("#submission").on("click", function (event) {
    console.log("click");
    
    var hash = CryptoJS.MD5("Message");
     console.log(hash.toString());


    event.preventDefault();

   
     var Uname = $("#username").val();
     var password = $("#password").val();
     var md5Pass = CryptoJS.MD5(password).toString();

     var newUser = {
      name: Uname,
      password : md5Pass
    
    };
      

    console.log(newUser);

    $.ajax("/api/user", {
      type: "POST",
      data: newUser
    }).then(function () {

      location.reload();
      console.log("added a new order");
    })
  });




  