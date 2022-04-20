const express = require("express");
const {registerUser, authUser, reserveUser, logoutUser} = require("../controllers/DinerController");
const router = express.Router();
const {protect} = require("../Middleware/AuthMiddleware");

router.route("/registration").post(registerUser);
router.route("/login").post(authUser);
router
// router.post("/login", authUser);
// router.route("/profile").post(protect, updateUserProfile);
router.route('/reservation').post(protect, reserveUser)
router.route('/logout').get(logoutUser)

router.route('/profile').get(protect, reserveUser)

module.exports = router;