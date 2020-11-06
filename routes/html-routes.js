module.exports = function(app) {
    // GET homepage route
    app.get("/", (req, res) => {
        res.render("index");
    });

    app.get("/login", (req, res) => {
        res.render("login");
    });
    app.get("/signup", (req, res) => {
        res.render("signup");
    });

    app.get("/products", (req, res) => {
        res.render("allProducts")
    })
};


  