// Import express, set up port, and import routes
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const htmlRoute = require('./routes/html-routes');
const apiRoute = require('./routes/api-routes');

// Middleware
// Set URL encded format; Set to false to use query string library, excludes more complex objects
// Parse Json
// Serve static files from public folder
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/', htmlRoute);
app.use('/api', apiRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});