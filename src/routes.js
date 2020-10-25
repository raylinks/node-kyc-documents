const  CategoryController = require('./controllers/CategoryController');
const  DocumentTypeController = require('./controllers/DocumentTypeController');
const  DocumentController = require('./controllers/DocumentController');
const  RegisterController = require('./controllers/RegisterController');
const  LoginController = require('./controllers/LoginController');

module.exports = (app) => {
    app.get('/api/all', 
       DocumentTypeController.index)

    app.get('/api/show/:slug', 
       DocumentTypeController.show)

   app.get('/api/document/index', 
       DocumentController.index)

   app.post('/api/register/create', 
       RegisterController.register)

   app.post('/api/auth/login', 
       LoginController.login)
}
