const posts = [];
let currentId = 1;

function addPost(post) {
    const newPost = {...post, id: currentId++ };
    posts.push(newPost);
    return newPost;
}

function getAllPost() {
    return JSON.parse(JSON.stringify(posts));
}

function getPostById(id) {
    return posts.find(i => i.id === id);
}

function updatePostById(id, newPost) {
    const postIndex = getPostIndexById(id);
    const updatedPost = {...newPost, id };
    posts[postIndex] = updatedPost;
    return updatedPost;
}

function getPostIndexById(id) {
    return posts.findIndex(i => i.id === id);
}

function deletePostById(id) {
    const postIndex = getPostIndexById(id);
    const deletedPost = posts.splice(postIndex, 1);
    return deletedPost;
}

function doesIdExist(id) {
    return getPostIndexById(id) !== -1;
}

module.exports = {
    getAllPost,
    getPostById,
    updatePostById,
    deletePostById,
    addPost,
    doesIdExist
};