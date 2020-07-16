var express     = require("express"),
    nodemailer  = require("nodemailer"),
    router      = express.Router();


// Contact route with nodemailer code
router.get("/contact", function(req, res){
    res.render("contact");
});
router.post("/contact/formProcess", function(req, res){
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
            pass: "senttotina515", 
        },
        });

        let info = await transporter.sendMail({
        from: '"Automated contact email" <tjcorkhillsender@outlook.com>', 
        to: "tjcorkhill@gmail.com",
        subject: "Storey Social Contact Me", 
        text:  "Name: " + name + " \nEmail: " + email + " \nMessage: " + message + " \nIf there is a number here then I am spam: " + age
        });
    }
    main().catch(console.error);
res.redirect("/contact");
});

module.exports = router;