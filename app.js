let express           = require("express"),
       app            = express(),
       bodyParser     = require("body-parser"),
       path           = require("path"),
       nodemailer     = require("nodemailer"),
       contactRoute   = require("./routes/contact"),
       indexRoutes    = require("./routes/index");


// app config
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(indexRoutes);
app.use(contactRoute);


app.listen(process.env.PORT || 5000);

// app.listen(3000, function(req, res){});