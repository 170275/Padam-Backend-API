
const userController = require("../controllers/user.controller");

module.exports = function(app) {


  app.post('/api/setup/user/upload', userController.upload),

  app.get('/api/setup/user/logout', userController.logout)
  app.post('/api/setup/user/contact', userController.contact)
  app.post('/api/setup/user/change_password', userController.passwordUpdate)



  app.get('/api/setup/user/grid/list', userController.getPaginatedList),
  app.post('/api/setup/user/create', userController.create),
  app.put('/api/setup/user/update', userController.update),
  app.get('/api/setup/user/get/:id', userController.getById)
  app.delete('/api/setup/user/delete/:id', userController.remove)



}
