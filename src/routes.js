const  CategoryController = require('./controllers/CategoryController');
const  DocumentTypeController = require('./controllers/DocumentTypeController');
const  DocumentController = require('./controllers/DocumentController');

module.exports = (app) => {
    app.get('/api/all', 
       DocumentTypeController.index)

    app.get('/api/show/:slug', 
       DocumentTypeController.show)

   app.get('/api/document/index', 
       DocumentController.index)
}
