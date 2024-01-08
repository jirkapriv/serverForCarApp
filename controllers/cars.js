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

exports.getCarByID = async (req, res) => {
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

exports.updateCar = async (req, res) => {
  try {
    const update = {
      name: req.body.name,
      model: req.body.model,
      color: req.body.color,
      shifting: req.body.shifting,
      year: req.body.year,
    };
    const result = await Car.findByIdAndUpdate(req.params.id, update);
    if (result) {
      return res.status(200).send({
        msg: "Bylo updatenuto auto",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "auto nebylo updatenuto",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.patchCar = async (req, res) => {
  try {
    const update = {};
    for (const ops of req.body) {
      update[ops.propName] = ops.value;
    }

    const result = await Car.findByIdAndUpdate(req.params.id, update);
    if (result) {
      return res.status(200).send({
        msg: "Bylo updatenuto auto",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "auto nebylo updatenuto",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.deleteCarByID = async (req, res) => {

try {

  const result = await Car.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Bylo smazano auto",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "auto nebylo smazano",
    });

} catch (err) {
  res.status(500).send(err);
}

};
