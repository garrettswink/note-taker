// Imports
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Read Notes
router.get('/api/notes', (req, res) => {
    try {
        const userNotes = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
        res.json(userNotes);
    } catch (err) {
        console.error('Error reading JSON file:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Post Notes
router.post('/api/notes', (req, res) => {
    try {
        const usernote = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4(),
        };
        
        usernote.push(newNote);
        fs.writeFileSync('db/db.json', JSON.stringify(usernote));
        
        res.json(usernote);
    } catch (err) {
        console.error('Error reading or writing JSON file:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete Notes
router.delete('/api/notes/:id', (req, res) => {
    try {
        const data = fs.readFileSync('db/db.json', 'utf-8');
        const dataJson = JSON.parse(data);
        
        const newNotes = dataJson.filter((note) => {
            return note.id !== req.params.id;
        });
        
        fs.writeFileSync('db/db.json', JSON.stringify(newNotes));
        
        res.json('Note Deleted');
    } catch (err) {
        console.error('Error reading or writing JSON file:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports = router;

