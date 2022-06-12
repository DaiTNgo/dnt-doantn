const express = require('express');
const router = express.Router();
const PowerController = require('../app/controllers/power.controller.js');

router.post('/date', PowerController.getDate);
router.post('/hour', PowerController.getHour);
router.post('/month', PowerController.getMonth);
router.get('/current-time', PowerController.currentTime);
router.post('/', PowerController.send);

//-------------------- {Dev}
// router.get('/time', SolarController.receive);
// router.delete('/delete/date', SolarController.deleteDate);
// router.delete('/delete', SolarController.delete);

module.exports = router;
