import express from "express";
let router = express.Router();



/* GET home page. */
router.get('/', function(req, res) {
  res.send("Home page");
});





export default router;