const express = require("express");
const {
  getUserBYID,
  addUser,
  upadteUserById,
  deleteUser,
  getUsers,
} = require("../controllers/userController");
const router = express.Router();
router.route("/").get(getUsers).post(addUser);
router.route("/:id").get(getUserBYID).delete(deleteUser).put(upadteUserById);
// router.route("/").post(addUser)
// router.route("/:id").put(upadteUserById)
// router.route("/:id").delete(deleteUser)

module.exports = router;
