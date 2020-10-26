const  CategoryController = require('./controllers/CategoryController');
const  DocumentTypeController = require('./controllers/DocumentTypeController');
const  DocumentController = require('./controllers/DocumentController');
const  RegisterController = require('./controllers/RegisterController');
const  LoginController = require('./controllers/LoginController');

module.exports = (app) => {
// Authentication routes
   app.post('/api/register/create', 
       RegisterController.register)

   app.post('/api/auth/login', 
       LoginController.login)

//DocumentType Routes
    app.get('/api/all', 
       DocumentTypeController.index)

    app.get('/api/show/:slug', 
       DocumentTypeController.show)

// Document Routes
   app.get('/api/document/index', 
       DocumentController.index)

}
