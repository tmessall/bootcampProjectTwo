var db = require("../models");

module.exports = function (app) {

    // GET homepage route
    app.get("/", (req, res) => {
        db.Product.findAll({raw: true}).then(function (dbProduct) {
            console.log(dbProduct);
            res.render("index", {allProducts: dbProduct});
        })

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


