const express = require('express');
const router = express.Router();

const  ClassroomController = require('../controllers').classroom;
router.get('/', function(req,res,next){
    // return
    });


router.get('/api/class', ClassroomController.list);

module.exports  = router;