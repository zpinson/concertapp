const db = require("../models")
const bcrypt = require("bcrypt")

module.exports = {

    login: (req, res) => {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(async function (userData) {
            if (!userData) {
                res.send({ user: false, message: "No user with this email" });
                return
            }
            if (await bcrypt.compare(req.body.password, userData.password)) {
                res.send({ user: userData.id, message: "Welcome Back" })
            }
            else {
                res.send({ user: false, message: "That is not the password for this account!" });
            }
        }).catch(err => {
            res.send(err)
            console.log("login error")
        });
    }

}