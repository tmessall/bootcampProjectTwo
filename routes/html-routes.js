module.exports = function(app) {
    // GET homepage route
    app.get("/", (req, res) => {
        res.render("index");
    });

};

//get login page route
module.exports = function(app) {
    // GET homepage route
    app.get("/login", (req, res) => {
        res.render("login");
    });
};


    app.get("/login", (req, res) => {
        res.render("login");
    });
    app.get("/signup", (req, res) => {
        res.render("signup");
    });
};


  