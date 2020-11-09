var userName = localStorage.getItem("congoUser");

// Adding a new product on the main page
$("#submission").on("click", function (event) {
    event.preventDefault();
    $.ajax("/api/users/" + userName, {
        type: "GET",
    }).then((res) => {
        var newProduct = {
            name: $(".product").val(),
            userID: res.id,
            description: $(".description").val(),
            imageUrl: $("#image").val()
        };

        $.ajax("/api/products", {
            type: "POST",
            data: newProduct
        }).then(function () {
            window.location.replace("/main");
        })
    });
});