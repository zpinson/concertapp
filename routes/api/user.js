const router = require ("express").Router();
const userController = require ("../../controllers/userController");

router.route("api/user")
    .get(userController.login)
    .post(userController.signup)

module.exports = router;