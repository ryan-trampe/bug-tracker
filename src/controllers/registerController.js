const path = require("path");

// Sending registration view
const registerView = (req,res) => {
    res.sendFile(path.join(__dirname,"../views/registration.html"));
};


const registerUser = (req,res) => {

}


module.exports = {
    registerView,
    registerUser,
};
