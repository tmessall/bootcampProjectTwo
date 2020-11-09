function checkPasswordDB() {
  return $("#password").val() == $("#confirmPassword").val();
}

   

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
    
    // var dbPwd = (res.password);
    // var dbUser = (res.name);
    // if the password or username do not match the DB

    if (res === null || res === null) {
        alert("Your username/password is incorrect. Please try again.")
    }

    //if the username AND password match the DB, proceed to the home page (later to be member page)
    else if (userPassword === res.password && userNameInput === res.name) {
        $.ajax("/", {
          type: "GET",
        }).then(function (res) {
          console.log("successful login");
          window.location.replace("/");
        }) 
      } else  {

        alert("Your username/password is incorrect. Please try again.")
       
      }
  });


});
