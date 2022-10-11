const express = require("express")
const router = express.Router()

const controller = require("../controllers/clientController")
const authController = require("../controllers/authController")

router.get("/all", controller.getAll)
router.post("/register", controller.registerClient)
router.post('/login', authController.login)
router.patch("/update/:id", controller.updateClientById)
router.delete("/delete/:id", controller.deleteClientById)

module.exports = router