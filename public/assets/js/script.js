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
      type: "GET"
    }).then(res => {
      res.forEach(user => {
        console.log(user.name);
        if (user.name.toLowerCase() == $("#usernameSign").val().toLowerCase()) {
          newUser = false;
        }
      });
      if (newUser) {
        finishSignUp();
      } else {
        // Clears fields and tells user the issue
        $("#usernameSign").val("");
        $("#password").val("");
        $("#confirmPassword").val("");
        $("#userTaken").show();
      }
    });
  } else {
    // Clears fields and tells user the issue
    $("#password").val("");
    $("#confirmPassword").val("");
    $("#passNoMatch").show();
  }
}

function checkPasswordMatch() {
  return $("#password").val() == $("#confirmPassword").val();
}

// Adds new user to db
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

// Allows user to continue to main page without logging in
$("#guestLoad").on("click", function(event) {
  event.preventDefault(event);
  $.ajax("/", {
    type: "GET",
  }).then(function (res) {
    console.log("idk")
    window.location.replace('/')
  });
});
