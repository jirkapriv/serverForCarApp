const express = require("express");
const router = express.Router();

/**
 * Get all cars
 * URL: /cars
 * Method: GET
 */

router.get("/", (req, res) => {
  res.send("GET all cars");
});

/**
 * Get car by id
 * URL: /cars/:id
 * Method: GET
 */

router.get("/:id", (req, res) => {
  res.send(`car: ${req.params.id}`);
});

/**
 * Created car
 * URL: /cars
 * Method: POST
 */

router.post("/", (req, res) => {
  res.send("Created Car");
});

/**
 * Update car
 * URL: /cars/:id
 * Method: PUT
 */

router.put("/:id", (req, res) => {
  res.send(`Updated car by id: ${req.params.id}`);
});

/**
 * Patche car
 * URL: /cars/:id
 * Method: PATCH
 */

router.patch("/:id", (req, res) => {
  res.send(`Patched car: ${req.params.id}`);
});

/**
 * Deleted car
 * URL: /cars/:id
 * Method: DELETE
 */

router.delete("/:id", (req, res) => {
  res.send(`Deleted car by id: ${req.params.id}`);
});

module.exports = router;
