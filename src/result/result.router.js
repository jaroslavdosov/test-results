const express = require('express');
const catchErrors = require('express-catch-errors');

const router = express.Router();
const {
  sendresults,
  getresults
} = require('./result.controller');

router
  .route('/sendresults')
  .post(catchErrors(sendresults));

router
  .route('/getresults')
  .post(catchErrors(getresults));



module.exports = router;
