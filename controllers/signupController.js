const db = require("../models")
const bcrypt = require("bcrypt")

module.exports = {
    register: async function (req, res){
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            db.User.create({
                email: req.body.email,
                password: hashedPassword
            })
                .then(userData => {
                    res.send({ user: userData.id, message:"User created!"})
                })
        } catch (err) {
            res.send(err)
        }
    }
};