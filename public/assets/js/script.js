$(".alert").hide();

// Adding a new product on the main page
$("#submission").on("click", function (event) {
  event.preventDefault();

  var newProduct = {
    name: $(".product").val(),
    username: $(".Uname").val(),
    description: $(".description").val(),
  };

  $.ajax("/api/products", {
    type: "POST",
    data: newProduct
  }).then(function () {
    location.reload();
  })
});

// Adding a new user on signup
$("#signUp").on("click", function (event) {
  event.preventDefault();
  $(".alert").hide();
  // Signs up user
  signUpUser();
});

function signUpUser() {
  // Checks that confirm password and password are identical
  var checked = checkPasswordMatch();
  if (checked) {
    var newUser = true;
    // ajax call has to happen in a certain order, so this can't be separated out into another function
    // call serves to make sure no duplicate usernames
    $.ajax("/api/users", {
      type: "POST",
      data: newUser
    }).then(function () {

      location.reload();
      console.log("added a new order");
    })
  };
};
