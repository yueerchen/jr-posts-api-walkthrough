const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());

let currentId = 1;
const posts = [];

app.get("/posts", (req, res) => {
    res.json(posts);
});

app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.find(i => i.id === Number(id));
    if (!post) {
        return res.sendStatus(404);
    }
    res.json(post);
});

app.post("/posts", (req, res) => {
    console.log(req.body);
    const { author, content } = req.body;
    const newPost = { author, content, id: currentId++ };
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { author, content } = req.body;
    const post = posts.find(i => i.id === Number(id));
    if (!post) {
        return res.sendStatus(404);
    }
    post.author = author;
    post.content = content;
    res.json(post);
});

app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    const postIndex = posts.findIndex(i => i.id === Number(id));
    if (!post) {
        return res.sendStatus(404);
    }
    // splice from postIndex delete one element
    const deletePost = posts.splice(postIndex, 1);
    res.json(deletePost);
});

app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`);
});