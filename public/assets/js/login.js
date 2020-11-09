$(".alert").hide();

function checkPasswordDB() {
  return $("#password").val() == $("#confirmPassword").val();
}

// Allows user to continue to main page without logging in
$("#guestLoad").on("click", function (event) {
  event.preventDefault(event);
  window.location.replace('/')
});

$("#goSign").on("click", function (event) {
  event.preventDefault(event);
  window.location.replace('/signup')
})

$("#submit").on("click", function (e) {
  e.preventDefault();
  // Checks that the password and username match the ones in the database
  var userPassword = $("#password").val();
  var hashPass = CryptoJS.MD5(userPassword).toString();
  var userNameInput = $("#username").val();
  console.log(userPassword);
  console.log(userNameInput);
  // ajax call
  $.ajax("/api/users/" + userNameInput, {
    type: "GET",
  }).then((res) => {
    if (res === null || res === null) {
      $(".alert").show();
    }

    //if the username AND password match the DB, proceed to the home page (later to be member page)
    else if (hashPass === res.password && userNameInput === res.name) {
      $.ajax("/", {
        type: "GET",
      }).then(function (res) {
        localStorage.setItem("congoUser", userNameInput);
        window.location.replace("/");
      })
    } else {
      $(".alert").show();
    }
  });


});
