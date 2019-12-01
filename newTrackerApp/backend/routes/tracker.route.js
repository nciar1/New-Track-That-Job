let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Tracker Model
let trackerSchema = require('../Models/Tracker');

// CREATE Tracker
router.route('/create-tracker').post((req, res, next) => {
  trackerSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Tracker
router.route('/').get((req, res) => {
  trackerSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Edit Tracker
router.route('/edit-tracker/:id').get((req, res) => {
  trackerSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// View Tracker
router.route('/view-tracker/:id').get((req, res) => {
  trackerSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Tracker updated successfully !')

    }
  })
})




// Delete Tracker
router.route('/delete-tracker/:id').delete((req, res, next) => {
  trackerSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;