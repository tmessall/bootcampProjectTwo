module.exports = function(app) {
    // GET homepage route
    app.get("/", (req, res) => {
        res.render("index");
    });
}