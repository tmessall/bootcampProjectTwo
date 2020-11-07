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
  if (checked) {
    var newUser = checkNewUser();
    if (newUser) {
      finishSignUp();
    } else {
      $("#username").val("");
      $("#password").val("");
      $("#confirmPassword").val("");
      $("#userTaken").show();
    }
  } else {
    $("#password").val("");
    $("#confirmPassword").val("");
    $("#passNoMatch").show();
  }
}

function checkPasswordMatch() {
  return $("#password").val() == $("#confirmPassword").val();
}

function checkNewUser() {
  $.ajax("/api/users", {
    type: "GET"
  }).then(res => {
    res.forEach(user => {
      if (user.name == $("#username").val) {
        return false;
      }
    })
    return true;
  });
}

function finishSignUp() {
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
}