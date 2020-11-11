var userName = localStorage.getItem("congoUser");

// Adding a new product on the main page
$("#submission").on("click", function (event) {
    event.preventDefault();
    console.log($(".product").val())
    $.ajax("/api/users/" + userName, {
        type: "GET",
    }).then((res) => {
        var newProduct = {
            name: $("#producttxt").val(),
            userID: res.id,
            description: $("#descriptiontxt").val(),
            imageUrl: $("#imagetxt").val()
        };

        $.ajax("/api/products", {
            type: "POST",
            data: newProduct
        }).then(function () {
            window.location.replace("/main");
        })
    });
});

// I want heroku to work so this is here