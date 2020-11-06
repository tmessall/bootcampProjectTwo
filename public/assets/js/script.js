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
  // Signs up user
  signUpUser();
});

function signUpUser() {
  var checked = checkPasswordMatch();
  console.log(checked);
  if (checked) {
    var Uname = $("#username").val();
    var password = $("#password").val();
    var md5Pass = CryptoJS.MD5(password).toString();

    var newUser = {
      name: Uname,
      password: md5Pass
    };

    $.ajax("/api/users", {
      type: "POST",
      data: newUser
    }).then(function () {
      location.reload();
    })
  } else {
    $("#password").val("");
    $("#confirmPassword").val("");
    $("#passNoMatch").show();
  }
}


function checkPasswordMatch() {
  return $("#password").val() == $("#confirmPassword").val();
}