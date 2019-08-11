const express = require("express");
const {
    getAllPost,
    getPostById,
    updatePostById,
    addPost,
    deletePostById
} = require("../controllers/posts");
const validated = require("../middleware/validated");

const router = express.Router();

router.get("", getAllPost);

router.get("/:id", validated, getPostById);

router.post("", addPost);

router.put("/:id", validated, updatePostById);

router.delete("/:id", validated, deletePostById);

module.exports = router;