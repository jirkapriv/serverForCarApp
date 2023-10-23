const express = require("express");
const router = express.Router();

/**
 * Get all animals
 * URL: /animals
 * Method: GET
 */

router.get("/", (req, res) => {
  res.send("GET all animals");
});

/**
 * Get animal by id
 * URL: /animals/:id
 * Method: GET
 */

router.get("/:id", (req, res) => {
  res.send(`animal: ${req.params.id}`);
});

/**
 * Created animal
 * URL: /animals
 * Method: POST
 */

router.post("/", (req, res) => {
  res.send("Created animal");
});

/**
 * Update animal
 * URL: /animals/:id
 * Method: PUT
 */

router.put("/:id", (req, res) => {
  res.send(`Updated animal by id: ${req.params.id}`);
});

/**
 * Patche animal
 * URL: /animals/:id
 * Method: PATCH
 */

router.patch("/:id", (req, res) => {
  res.send(`Patched animal: ${req.params.id}`);
});

/**
 * Deleted animal
 * URL: /animals/:id
 * Method: DELETE
 */

router.delete("/:id", (req, res) => {
  res.send(`Deleted animal by id: ${req.params.id}`);
});

module.exports = router;
