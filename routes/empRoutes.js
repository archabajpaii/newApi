const express = require("express");
const { 
    addEmployee,
    getEmployeeList,
    deleteEmployee,
    updateEmployee


 } = require("../controllers/empController");
const router = express.Router();
router.route("/").get(getEmployeeList).post(addEmployee);
router.route("/:id").delete(deleteEmployee).put(updateEmployee)
// router.route("/").post(addUser)
// router.route("/:id").put(upadteUserById)
// router.route("/:id").delete(deleteUser)

module.exports = router;
