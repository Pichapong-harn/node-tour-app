const express = require('express');
const tourController = require('../controller/tourController');

const router = express.Router();

router.param('id', tourController.checkID)

// create checkbody middleware
// check if body contains the name and price propoty
// if not, send back 400 (bad request)
// add it to post handler stack

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
