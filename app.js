let express           = require("express"),
       app            = express(),
       bodyParser     = require("body-parser"),
       path           = require("path"),
       nodemailer     = require("nodemailer");


// app config
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

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
        let age = req.body.age;

        let transporter = nodemailer.createTransport({
        host: "smtp.outlook.com",
        port: 587,
        secure: false, 
        auth: {
            user: "tjcorkhillsender@outlook.com", 
            pass: process.env.NODEMAILER_PASS_STOREYSOCIAL_1, 
        },
        });

        let info = await transporter.sendMail({
        from: '"Automated contact email" <tjcorkhillsender@outlook.com>', 
        to: "thestoreysocial@hotmail.com",
        subject: "Storey Social Contact Me", 
        text:  "Name: " + name + " \nEmail: " + email + " \nMessage: " + message + " \nIf there is a number here then I am spam: " + age
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

// app.listen(3000, function(req, res){});