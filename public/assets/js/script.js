$(".alert").hide();

// Adding a new product on the main page
$("#submission").on("click", function (event) {
  event.preventDefault();

  var newProduct = {
    name: $(".product").val(),
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

// updating the likes
$("button.like").on("click", function (event) {
  event.preventDefault();
  var productId = event.target.id;
  var like = $(this).data("like") + 1;
  console.log(productId);
  console.log(like);
  var updatedLikes = {
    likes: like
  }
  $.ajax("/api/products/like/" + productId, {
    type: "PUT",
    data: updatedLikes
  }).then(function (res) {
    location.reload();
  });

});

// updating the dislikes
$("button.dislike").on("click", function (event) {
  event.preventDefault();
  var productId = event.target.id;
  var dislike = $(this).data("dislike") + 1;
  var dislike2 = parseInt(dislike);
  console.log(productId);
  console.log(dislike2);
  var updatedDislikes = {
    dislikes: dislike2
  }
  $.ajax("/api/products/dislike/" + productId, {
    type: "PUT",
    data: updatedDislikes
  }).then(function (res) {
    location.reload();
  });

});