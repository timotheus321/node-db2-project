// DO YOUR MAGIC
const express = require('express')
const Car = require('./cars-model')
const router = express.Router()
const {
    checkCarId,
    checkVinNumberUnique,
    checkVinNumberValid,
    checkCarPayload
} = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err) {
        next(err)
    }
})
router.get('/:id', checkCarId, async (req, res, next) => {
   res.json(req.car)
})
router.post('/', checkVinNumberUnique, checkCarPayload, checkVinNumberValid, async (req, res, next) => {
    try {
      console.log("Request Payload:", req.body); // Log the request payload
      const car = await Car.create(req.body);
      res.json(car);
    } catch (err) {
      next(err);
    }
  });
  

module.exports = router