const exp = require("express");
const { sendEmailController } = require("../controllers/portcontroller");
const router = exp.Router();

router.post("/sendMail", sendEmailController);

module.exports = router;
