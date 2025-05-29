// Needed Resources
const express = require("express")
const router = new express.Router() 

// Static Routes
// Set up "public" folder for static content
router.use(express.static("public"))

module.exports = router
