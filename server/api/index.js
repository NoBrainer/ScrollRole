const express = require('express');
const router = express.Router();

/* Redirect to the ScrollRole wiki. */
router.get('/', function(req, res, next) {
	res.redirect("https://github.com/NoBrainer/scrollrole/wiki");
});

module.exports = router