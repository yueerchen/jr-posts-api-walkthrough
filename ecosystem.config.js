module.exports = {
    apps: [{
        name: "posts-app",
        script: "./src/index.js",
        env_production: {
            NODE_ENV: "production"
        }
    }]
};