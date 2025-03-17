const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let comments = [];
let currentUser = null;

app.get('/api/comments', (req, res) => {
    res.json(comments);
});

app.get('/api/user', (req, res) => {
    if (currentUser) {
        res.json({ isLoggedIn: true, avatar: currentUser.avatar, name: currentUser.name });
    } else {
        res.json({ isLoggedIn: false });
    }
});

app.post('/api/comments', (req, res) => {
    if (!currentUser) return res.status(401).send('Unauthorized');

    const comment = {
        id: comments.length + 1,
        avatar: currentUser.avatar,
        name: currentUser.name,
        text: req.body.text,
        timestamp: new Date().toISOString(),
        replies: []
    };
    comments.push(comment);
    res.json(comment);
});

app.post('/api/comments/:commentId/replies', (req, res) => {
    if (!currentUser) return res.status(401).send('Unauthorized');

    const commentId = parseInt(req.params.commentId, 10);
    const comment = comments.find(c => c.id === commentId);
    if (!comment) return res.status(404).send('Comment not found');

    const reply = {
        id: comment.replies.length + 1,
        avatar: currentUser.avatar,
        name: currentUser.name,
        text: req.body.text,
        timestamp: new Date().toISOString()
    };
    comment.replies.push(reply);
    res.json(reply);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
