// Import dependencies
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

// Set up the application
const app = express();
const port = process.env.PORT || 3000;

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes/index'));

// Handle 404 errors
app.use((req, res) => {
  res.status(404).render('errors/404', { title: '404 - Page Not Found' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
