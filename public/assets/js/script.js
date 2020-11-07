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
  var checked = checkPasswordMatch();
  if (checked) {
    var newUser = true;
    $.ajax("/api/users", {
      type: "GET"
    }).then(res => {
      res.forEach(user => {
        console.log(user.name);
        if (user.name == $("#usernameSign").val()) {
          newUser = false;
        }
      });
      if (newUser) {
        finishSignUp();
      } else {
        $("#usernameSign").val("");
        $("#password").val("");
        $("#confirmPassword").val("");
        $("#userTaken").show();
      }
    });
  } else {
    $("#password").val("");
    $("#confirmPassword").val("");
    $("#passNoMatch").show();
  }
}

function checkPasswordMatch() {
  return $("#password").val() == $("#confirmPassword").val();
}

function finishSignUp() {
  console.log("signing up");
  var Uname = $("#usernameSign").val();
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
    window.location.replace('/');
  })
}

$("#guestLoad").on("click", function(event) {
  event.preventDefault(event);
  $.ajax("/", {
    type: "GET",
  }).then(function (res) {
    console.log("idk")
    window.location.replace('/')
  });
});
