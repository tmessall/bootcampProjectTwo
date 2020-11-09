var userName = localStorage.getItem("congoUser");
if (window.location.pathname == "/" && userName) {
  window.location.replace("/main");
}
$("#hello").text(`Hello ${userName}!`);

$("#logout").on("click", function (event) {
  event.preventDefault(event);
  localStorage.removeItem("congoUser");
  window.location.replace("/")
});

$("#login").on("click", function (event) {
  event.preventDefault(event);
  window.location.replace("/login");
})

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