const posts = [];
let currentId = 1;

function addPost(post) {
    const newPost = {...post, id: currentId++ };
    post.push(newPost);
    return newPost;
}

function getAllPost() {
    return JSON.parse(JSON.stringify(post));
}

function getPostById(id) {}