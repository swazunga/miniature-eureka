const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results);
    }
  });
});

//read the notes, json.parse, req.body, write db.json fs.writefile

module.exports = router;
