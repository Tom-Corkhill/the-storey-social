require("dotenv").config();
var express     = require("express"),
    nodemailer  = require("nodemailer"),
    router      = express.Router();


// Contact route with nodemailer code
router.get("/contact", function(req, res){
    res.render("contact");
    
});
router.post("/contact/formProcess", function(req, res){
    async function main() {
        const output = `
            <p>You have a new contact request</p>
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}
        `;

        let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
            user: process.env.EMAIL, 
            pass: process.env.PASSWORD, 
        },
        tls:{
            rejectUnauthorized:false
        }
        });

        let info = await transporter.sendMail({
        from: '"Automated contact email" <tjcorkhillsender@outlook.com>', 
        to: "tjcorkhill@gmail.com",
        subject: "Storey Social Contact Me",
        html: output
        });
    }
    main().catch(console.error);
res.redirect("/contact");
});

module.exports = router;