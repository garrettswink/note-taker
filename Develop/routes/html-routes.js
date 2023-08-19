const router = require('express').Router();
const path = require('path');

// Is this one needed? Seems like it's just for inputs on the first page, which should be handled by a link...return to this.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;