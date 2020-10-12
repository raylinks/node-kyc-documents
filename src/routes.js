// const express = require('express');
// const router = express.Router();

//const  DocumentController = require('./controllers');
const  CategoryController = require('./controllers/CategoryController');

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

