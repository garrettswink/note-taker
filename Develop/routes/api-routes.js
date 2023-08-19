const router = require('express').Router();
const fs = require('fs');

router.get('/api/notes', async (req, res) => {
    const Usernote = await JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(Usernote);
});

router.post('/api/notes', (req, res) => {
    const Usernote = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
    };
    
    Usernote.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(Usernote));
    res.json(Usernote);
});

module.exports = router;