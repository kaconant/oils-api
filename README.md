# myBlendology

myBlendology is a web application comprised of a PERN stack (Postgres, Express, React, & NodeJS) that allows you to create diffuser essential oil blends based off of a user's choice of mood. It also has local authentication as a feature.  

![HomePage](https://github.com/kaconant/oils-api/blob/master/client/public/img/readme-img/homepage.png)

# Functionality of myBlendology

## Home Page 

The home page begins by urging a user to select one of three moods: Calm, Awaken, or Sensual. Each choice will generate three separate carousels divided by level. 

* Base oils provide the lasting impression of your blend. These oils are typically heavy and will provide the final note of your blend.
* Middle oils are considered the heart of your blend and will emerge after your top oil has faded. These oils often balance your blend and are typically well-rounded.
* Top oils provide your first impression of your blend. These oils are often described as light and fresh, but tend to fade quickly.

![Carousel](https://github.com/kaconant/oils-api/blob/master/client/public/img/readme-img/carousel.png)

After the user selects one oil from each carousel, they will be provided a calculation of the essential oils needed to create the right balance for their mood blend (via a diffuser). 

![Calculation](https://github.com/kaconant/oils-api/blob/master/client/public/img/readme-img/calculation.png)

After the blend has been created, the user has the option to either:

* Share their blend via a modal component that uses [MailGun](https://www.mailgun.com/)
* Save their blend (bringing them to their user page if logged in or the login page if not logged in)
* Make a new blend, moving them back up to the top of the homepage

## Authentication - Sign Up & Log In

The user has the ability to create a local user account via the sign up page as well as return to their user page by logging into the site via the log in page. 

![Signup](https://github.com/kaconant/oils-api/blob/master/client/public/img/readme-img/signup.png)

![Login](https://github.com/kaconant/oils-api/blob/master/client/public/img/readme-img/login.png)

## UserPage

The userpage will allow users to see their previously created blends as well as mark their favorite blends. In addition, it has the option to return to the home page to create another blend to add to their user collection. 

![UserPage](https://github.com/kaconant/oils-api/blob/master/client/public/img/readme-img/userpage.png)

## FAQ Page

The FAQ page answers the basic questions any user might have about the functionality of the site from a user experience perspective. 

![FAQ](https://github.com/kaconant/oils-api/blob/master/client/public/img/readme-img/faq.png)

## About Us Page

The about us page allows users to see the authors of the site and show our playful side. 

![About](https://github.com/kaconant/oils-api/blob/master/client/public/img/readme-img/aboutus.png)

# Additional Information

## Installation

### Please install the following packages

```
Axios, Radium, React, React-Bootstrap, React-Coverflow, React-Dom, React-Router-Dom, SmoothScroll, Bcrypt, Cookie-Parser, Debug, Dotenv, Express, Express-Session, HBS, HTTP-Errors, Logger, LS, Morgan, Nodemailer, Nodemon, Passport, Passport-Google-OAuth, Passport-Local, Path, PG, React-Router, Sequelize, Sequelize-CLI
```

## Authors

* **Krissy Conant** - [kaconant](https://github.com/kaconant)
* **Stacy Moore** - [stacyelle](https://github.com/stacyelle)

## License

This project is licensed under the MIT License.

## To 

## Acknowledgments

* Our instructors, Adam Szaruga and Lachlan Haywood, at [DigitalCrafts](https://www.digitalcrafts.com/)
* Create-React-App Developers at [Facebook](https://github.com/facebook/create-react-app)
