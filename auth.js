const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const models = require('./models');
var cors = require('cors')

const setupAuth = (app) => {
    app.use(cookieParser());

    app.use(session({
        secret: 'thesadgirls',
        resave: true,
        saveUninitialized: true,
    }));

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.APP_URL}/auth/google/callback`
    },
    function(accessToken, refreshToken, profile, done) {
        models.User.findOrCreate({
            where: {
                google_id: profile.id
            },
            defaults: {
                firstName: profile.name, givenName,
                lastName: profile.name, familyName,
                username: profile.login,
                google_id: profile.id,
                email: profile.email,
            }
        })
        .then(result => {
            return done(null, result[0]);
        })
        .catch(done);
    }
));

    // add the local (user/pass) strategy
    passport.use(new LocalStrategy({
        // options: https://github.com/jaredhanson/passport-local#parameters
        // change these if you want a different field name for username or password
        usernameField: 'email',
        passwordField: 'password',
    }, (email, password, done) => {
        // check if there is a user with the username given
        models.User.findOne({
            where: {
                'email': email
            }
        })
        .then((currentUser) => {
            // if there isn't a current User
            console.log("hi")
            if (!currentUser) {
                // return an error
                console.log(currentUser)
                return done(null, false, { message: 'Incorrect email' })
            }
            // If the password doesn't match
            if (!bcrypt.compareSync(password, currentUser.password)) {
                // return an error
                return done(null, false, { message: 'Incorrect password' })
            }
            // otherwise, return the user object
            return done(null, currentUser)
        })
        .catch(done);
    }));

    passport.serializeUser((user, done) => {
        done(null, {
            email: user.email,
            start_date: user.user_create_date
        })
    });

    passport.deserializeUser((userId, done) => {
        done(null, userId);
    })

    app.use(passport.initialize());

    app.use(passport.session());
    // this is a simple API to check if there is a user
    app.get('/api/user', (req, res, next) => {
        if (req.user) {
            return res.json({ user: req.user })
        } else {
            return res.json({ user: null })
        }
    })
    
    app.options('*', cors());
    app.get('/auth/google', 
        passport.authenticate('google', 
        { scope: ['https://www.googleapis.com/auth/plus.login'] }));

    app.get('/auth/google/callback',
        passport.authenticate('google', 
        { successRedirect: '/', failureRedirect: '/login' }),
        function(req,res) {
            console.log(req.user);
            res.redirect('/')
        });

    app.post('/auth/signup', (req, res) => {
        // destructure username and password off req.body into new constants
        const { firstname, lastname, email, password } = req.body;
        // Check if there is a user with the given email
        models.User.findOne({
            where: {
                'email': email
            }
        })
        .then((currentUser) => {
            // if there is a user already
            if (currentUser) {
                // return an error
                return res.json({
                    error: `Sorry, the email '${email}' is already taken.`;
                    alert(`Sorry, the email '${email}' is already taken.`)
                });
            }
            // otherwise, create a new user and encrypt the password
            models.User.create({
                'firstname': firstname,
                'lastname': lastname,
                'email': email,
                'password': bcrypt.hashSync(password, 10)
            })
            .then((newUser) => {
                // we don't want to return everything, so put all the fields into a new object
                const data = {
                    ...newUser.get()
                };
                // and then delete the password off that object
                delete data.password;
                // return the cleaned object
                return res.json(data);
            })
            .catch((err) => {
                // if there's an error, return that
                return res.json(err);
            });
        })
    })

    app.post('/auth/login',
        passport.authenticate('local'),
        (req, res) => {
            console.log(req)
            // req.user will have been deserialized at this point, so we need
            // to get the values and remove any sensitive ones
            const cleanUser = {...req.user.get()};
            if (cleanUser.password) {
                console.log(`Removing password from user:`, cleanUser.email);
                delete cleanUser.password
            }
            res.json({ user: cleanUser });
        }

    )

    app.get('/auth/logout', (req, res, next) => {
        if (req.user) {
            req.logout();
            return res.json({ msg: 'user logged out' });
        } else {
            return res.json({ msg: 'no user to log out' });
        }
    });
}

const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect('/');
    }
    res.redirect('/login');
}

module.exports = setupAuth;
module.exports.ensureAuthenticated = ensureAuthenticated;