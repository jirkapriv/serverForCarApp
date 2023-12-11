const Car = require("../models/cars");

exports.getALLCars = async (req, res) => {
  try {
    const result2 = await Car.find();
    if (result2) {
      return res.status(201).send({
        msg: "Byla nalezena auta",
        payload: result2,
      });
    }
    res.status(500).send({
      msg: "auto nebylo nalezeno",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getCarByID = async(req, res) => {
  try {
    const result2 = await Car.findById(req.params.id);
    if (result2) {
      return res.status(201).send({
        msg: "Bylo nalezeno auto",
        payload: result2,
      });
    }
    res.status(500).send({
      msg: "auto nebylo nalezeno",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createCar = async (req, res) => {
  try {
    const myNewCar = new Car({
      name: req.body.name,
      model: req.body.model,
      color: req.body.color,
      shifting: req.body.shifting,
      year: req.body.year,
    });
    const result = await myNewCar.save();
    if (result) {
      return res.status(201).send({
        msg: "Bylo vytvoreno nove auto",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "auto nebylo vytvoreno",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateCar = (req, res) => {
  const update = {
    name: req.body.name,
    model: req.body.model,
    color: req.body.color,
    shifting: req.body.shifting,
    seats: req.body.seats,
  };
  res.send({ update });
};
exports.patchCar = (req, res) => {
  const update = {};
  for (const ops of req.body) {
    update[ops.propName] = ops.value;
  }
  res.send({ update });
};
exports.deleteCarByID = (req, res) => {
  res.send(`Deleted car by id: ${req.params.id}`);
};
