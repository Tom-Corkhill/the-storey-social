var express           = require("express"),
       app            = express();

// app config
app.set("view engine", "ejs");
app.use(express.static("public"));

// ROUTES

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.get("/services", function(req, res){
    res.render("services");
});

app.get("/experience", function(req, res){
    res.render("experience");
});


app.listen(process.env.PORT || 5000);
// app.listen(3000, function(req, res){
//     console.log("Server Running");
// });