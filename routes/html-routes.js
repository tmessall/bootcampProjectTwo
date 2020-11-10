var db = require("../models");

module.exports = function (app) {
    // GET homepage route
    app.get("/", (req, res) => {
        db.Product.findAll({ raw: true }).then(function (dbProduct) {
            console.log(dbProduct);
            res.render("guest", { allProducts: dbProduct });
        })
    });

    app.get("/add", (req, res) => {
        res.render("add");
    })

    app.get("/login", (req, res) => {
        res.render("login");
    });

    app.get("/signup", (req, res) => {
        res.render("signup");
    });

    app.get("/main", (req, res) => {
        db.Product.findAll({ raw: true }).then(function (dbProduct) {
            console.log(dbProduct);
            res.render("index", { allProducts: dbProduct });
        })
    })

    app.get("/search/:item", (req, res) => {
        console.log(req.params.item);
        db.Product.findAll({
            where: {
                name: req.params.item
            }
        }).then(function (dbProduct) {
            res.render("index", { allProducts: dbProduct });
        })
    })
};


