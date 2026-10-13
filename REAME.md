# YelpCamp

A full-stack campground discovery app built with Node.js, Express, MongoDB, and EJS.

## Live Demo

https://campground-eosin.vercel.app/

## Overview

YelpCamp is a Yelp-inspired platform for discovering campgrounds, viewing details, adding reviews, and managing campground data. The project demonstrates full CRUD patterns, authentication, authorization, geolocation, Cloudinary image uploads, and MongoDB-backed persistence.

## Current Features

- Browse a list of campgrounds
- View a campground detail page
- Create, edit, and delete campground entries
- Leave campground reviews with star ratings
- Upload and manage campground images with Cloudinary
- Geocode locations with MapTiler
- User authentication with Passport.js
- Flash messages and error handling
- Private/admin-style access patterns for a closed or restricted deployment
- Relative time display for campground timestamps

## Tech Stack

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Passport.js
- Passport Local Mongoose
- Cloudinary
- MapTiler

### Frontend
- EJS
- ejs-mate
- Bootstrap 5
- Custom CSS and JavaScript

### Utilities
- Helmet for CSP
- Joi validation
- Express Session
- Connect Mongo
- Method Override

## Project Structure

```bash
YelpCamp/
├── app.js
├── package.json
├── .env
├── REAME.md
├── schemas.js
├── config/
│   ├── cloudinary/
│   │   └── index.js
│   └── multer/
│       └── index.js
├── controllers/
│   ├── campgrounds.js
│   ├── reviews.js
│   └── users.js
├── middleware/
│   ├── isAdmin.js
│   ├── isAuthor.js
│   ├── isLoggedIn.js
│   ├── isReviewAuthor.js
│   ├── returnTo.js
│   ├── validate.js
│   └── validateImageStorage.js
├── models/
│   ├── campground.js
│   ├── review.js
│   └── user.js
├── public/
│   ├── javascripts/
│   │   ├── clusterMap.js
│   │   ├── imageCheckbox.js
│   │   ├── imageFileUpload.js
│   │   ├── showPageMap.js
│   │   ├── timeAgo.js
│   │   └── validateForm.js
│   └── stylesheets/
│       ├── app.css
│       ├── home.css
│       └── stars.css
├── routes/
│   ├── campgrounds.js
│   ├── reviews.js
│   └── users.js
├── seeds/
│   ├── cities.js
│   ├── create-admin.js
│   ├── index.js
│   └── seedHelpers.js
├── utils/
│   ├── deleteCloudinaryImages.js
│   ├── ExpressError.js
│   ├── mongoSanitizeV5.js
│   ├── timeAgo.js
│   └── uploadImages.js
├── views/
│   ├── home.ejs
│   ├── campgrounds/
│   │   ├── edit.ejs
│   │   ├── error.ejs
│   │   ├── images.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   └── show.ejs
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── partials/
│   │   ├── flash.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   └── users/
│       ├── login.ejs
│       └── register.ejs
└── node_modules/
```

## Environment Variables

Create a `.env` file in the project root with values for:

```env
DB_CONNECTION_STRING=your_mongodb_connection_string
SECRET_KEY=your_session_secret
MAPTILER_API_KEY=your_maptiler_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
ADMIN_PASSWORD=your_admin_password_for_manual_setup
```

## Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Configure your environment variables in a `.env` file.

3. Start the app:

```bash
npm run dev
```

4. Open the app in the browser at:

```bash
http://localhost:3000
```

## Seeding and Admin Setup

The project includes a seed script for sample database data and a one-off admin creation script:

```bash
node seeds/index.js
node seeds/create-admin.js
```

The `create-admin.js` script creates the first admin account for a private or restricted deployment. It uses Passport’s `User.register()` method so the password is hashed properly.

## Authorization Notes

This app is configured for a private or restricted deployment pattern:

- public viewing is possible
- account registration is not intended to be open to everyone
- login is required for protected app actions
- admin-only access can be enforced via `isAdmin` middleware

## Routes

### Public
- `GET /`
- `GET /login`
- `GET /campgrounds`
- `GET /campgrounds/:id`

### Protected
- `GET /campgrounds/new`
- `POST /campgrounds`
- `GET /campgrounds/:id/edit`
- `PUT /campgrounds/:id`
- `DELETE /campgrounds/:id`
- `POST /campgrounds/:id/reviews`
- `DELETE /campgrounds/:id/reviews/:reviewId`

## Notes

This project was built as a learning exercise in backend development and includes MongoDB relationships, authentication, middleware, validation, Cloudinary uploads, and geolocation. The app is suitable for local development and can be adapted for a closed or private deployment model.

## License

ISC
