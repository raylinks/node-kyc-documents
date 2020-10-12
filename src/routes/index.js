const express = require('express');
const router = express.Router();

const  DocumentController = require('../controllers').classroom;
router.get('/', function(req,res,next){
    // return
    });


router.post('/api/class', DocumentController.create);

module.exports  = router;