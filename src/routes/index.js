// const express = require('express');
// const router = express.Router();

const  DocumentController = require('../controllers').classroom;
const  CategoryController = require('../controllers');

module.exports = (app) => {
    app.get('/api/all', 
       CategoryController.index)
}
// router.get('/', function(req,res,next){
//     // return
//     });


// router.post('/api/class', DocumentController.create);
// router.get('/api/all', CategoryController.index);

// module.exports  = router;