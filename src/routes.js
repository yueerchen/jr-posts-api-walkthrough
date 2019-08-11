const express = require("express");
const postsRoute = require("./routes/post");
const router = express.Router();

router.use("/posts", postsRoute);

module.exports = router;