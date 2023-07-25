const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const GitHubStrategy = require("passport-github2").Strategy;
const config = require("./config.js");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const ejs = require("ejs");
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "./www"));
app.use(express.static("web"));
app.use("/css", express.static(path.join(__dirname, "./css")));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "YOUR_SECRET_KEY",
    resave: false,
    saveUninitialized: true,
  })
); // Session

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new GitHubStrategy(
    {
      clientID: config.clientID,
      clientSecret: config.clientSecret,
      callbackURL: config.callbackURL,
      scope: config.scopes,
    },
    (accessToken, refreshToken, profile, cb) => {
      process.nextTick(() => {
        return cb(null, profile);
      });
    }
  )
);

app.get(
  "/auth/github",
  passport.authenticate("github", { scope: config.scopes })
);

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.get("/logout", (req, res) => {
  if (req.user) {
    req.logout(function (error) {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      }
    });
  }
  res.redirect("/");
});

app.get("/", (req, res) => {
  if (req.user) {
    res.render("index", {
      user: req.user,
    });
  } else {
    res.render("index", { user: req.user });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
