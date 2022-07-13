const path = require("path");


const homeView = (req,res) => {
    res.sendFile(path.join(__dirname,"../views/home.html"));
};

module.exports = {
    homeView,
};