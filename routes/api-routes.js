var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
    // GET route to get products
    app.get("/api/products", function (req, res) {
        db.Product.findAll({}).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

    // POST route to save new products
    app.post("/api/products", function (req, res) {
        db.Product.create({
            name: req.body.name,
            userID: req.body.userID,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

    // DELETE route for deleting products
    app.delete("/api/products/:id", function (req, res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });

    });

    // PUT route for updating products
    app.put("/api/products", function (req, res) {
        db.Product.update({
            name: req.body.name,
            userID: req.body.userID,
            description: req.body.description,
            likes: req.body.likes,
            dislikes: req.body.dislikes
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

    // GET route to get all users
    app.get("/api/users", function (req, res) {
        db.User.findAll({}).then(function (dbUser) {
            res.json(dbUser);
        });
    })

    // POST route so sign up a new user
    app.post("/api/users", function (req, res) {
        db.User.create({
            name: req.body.name,
            password: req.body.password
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    // GET route to login a user
    app.get("/api/users/:login", function (req, res) {
        db.User.findOne({
            where: {
                name: req.params.login
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    // GET route to check by ID
    app.get("/api/users/id/:id", function (req, res) {
        var passedId = parseInt(req.params.id);
        db.User.findOne({
            where: {
                id: passedId
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        })
    })


    // route to update likes
    app.put("/api/products/like/:id", function (req, res) {
        db.Product.update({
            likes: req.body.likes
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

    // route to updated dislikes
    app.put("/api/products/dislike/:id", function (req, res) {
        db.Product.update({
            dislikes: req.body.dislikes
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

};
