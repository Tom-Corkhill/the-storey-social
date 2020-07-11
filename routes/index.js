var express = require("express"),
    router  = express.Router();


// Landing page
router.get("/", function(req, res){
    res.render("home");
});

// About page
router.get("/about", function(req, res){
    res.render("about");
});

// Services page
router.get("/services", function(req, res){
    res.render("services");
});

// Experience page
router.get("/experience", function(req, res){
    res.render("experience");
});

module.exports = router; 