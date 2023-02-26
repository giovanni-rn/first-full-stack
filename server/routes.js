// imports
const router = require("express").Router();
const { hello, multiplier, maths } = require("./controllers.js");

// destination
router.get("/", hello);
router.get("/:nb", multiplier);
router.post("/", maths);

// export
module.exports = router;
