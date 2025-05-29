const express = require('express');
const router = express.Router();

// Sample data - in a real app, this would come from a database
const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/classics', name: 'Classics' },
  { path: '/sports', name: 'Sports' },
  { path: '/suvs', name: 'SUVs' },
  { path: '/trucks', name: 'Trucks' },
  { path: '/used', name: 'Used' },
  { path: '/about', name: 'About Us' },
  { path: '/contact', name: 'Contact' }
];

const reviews = [
  { text: "So fast its almost like traveling in time.", rating: "4/5" },
  { text: "Coolest ride on the road.", rating: "5/5" },
  { text: "I'm feeling Marty McFly!", rating: "5/5" },
  { text: "The most futuristic ride of our day.", rating: "4.5/5" },
  { text: "80's livin and I love it!", rating: "5/5" }
];

const upgrades = [
  { id: 1, name: "Flux Capacitor", imgSrc: "flux-cap.png" },
  { id: 2, name: "Flame Decals", imgSrc: "flame.jpg" },
  { id: 3, name: "Bumper Stickers", imgSrc: "bumper_sticker.jpg" },
  { id: 4, name: "Hub Caps", imgSrc: "hub-cap.jpg" }
];

// Home page route
router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home',
    navLinks,
    reviews,
    upgrades,
    activePage: '/'
  });
});

// About page route
router.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About Us',
    navLinks,
    activePage: '/about'
  });
});

// Contact page route
router.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Contact Us',
    navLinks,
    activePage: '/contact'
  });
});

// Vehicle detail page route
router.get('/vehicles/:id', (req, res) => {
  // In a real app, you would fetch the vehicle by ID from a database
  // This is just a placeholder that always shows the Delorean
  res.render('vehicle-detail', { 
    title: 'DMC Delorean',
    navLinks,
    activePage: '/classics',
    vehicleId: req.params.id
  });
});

// Export the router
module.exports = router;
