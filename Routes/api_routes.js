const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { v1: uuidv1 } = require("uuid");

router.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, results) => {
    if (err) {
      throw err;
    } else {
      console.log("200");
      res.send(results);
    }
  });
});

//read the notes, json.parse, req.body, write db.json fs.writefile
router.post("/api/notes", (req, res) => {
  let newNote = req.body;
  newNote.id = uuidv1();
  fs.readFile("./db/db.json", function (err, data) {
    var json = JSON.parse(data);
    json.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(json), function (err) {
      if (err) {
        throw err;
      }
    });
    res.json(newNote);
  });
});

module.exports = router;
