//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse JSON (uniform resource locators)
app.use(bodyParser.json());

// Create a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    console.log(comment);
    res.send('Comment is added to the database');
});

// Get comments
app.get('/comments', (req, res) => {
    // Get the comments from the database
    res.send('Get comments');
});

// Get comment
app.get('/comments/:id', (req, res) => {
    // Get the comment with the specified id
    res.send('Get comment with id ' + req.params.id);
});

// Update comment
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = req.body;
    console.log(id, comment);
    res.send('Comment is updated');
});

// Delete comment
app.delete('/comments/:id', (req, res) => {
    // Delete the comment with the specified id
    res.send('Comment is deleted');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// End of web server
