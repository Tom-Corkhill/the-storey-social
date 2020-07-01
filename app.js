var express           = require("express"),
       app            = express(),
       bodyParser     = require("body-parser"),
       nodemailer     = require("nodemailer");

// app config
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// ROUTES

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});


// contact routes
app.get("/contact", function(req, res){
    res.render("contact");
});
app.post("/contact/formProcess", function(req, res){
    async function main() {
        let name = req.body.name;
        let email = req.body.email;
        let message = req.body.message;

        let transporter = nodemailer.createTransport({
        host: "smtp.outlook.com",
        port: 587,
        secure: false, 
        auth: {
            user: "tjcorkhillsender@outlook.com", 
            pass: "senttoTina.515", 
        },
        });

        let info = await transporter.sendMail({
        from: '"Automated contact email" <tjcorkhillsender@outlook.com>', 
        to: "tjcorkhill@gmail.com",
        subject: "Testing", 
        text:  "Name: " + name + " \nEmail: " + email + " \nMessage: " + message 
        });
    }
    main().catch(console.error);
res.redirect("/contact");
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