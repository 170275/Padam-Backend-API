
const categoryController = require("../controllers/category.controller");



module.exports = function(app) {




  app.get('/api/setup/category', categoryController.getList),
  app.post('/api/setup/category/create', categoryController.create),
  app.put('/api/setup/category/update', categoryController.update),
  app.get('/api/setup/category/get/:id', categoryController.getById)
  app.delete('/api/setup/category/delete/:id', categoryController.remove)
  app.post('/api/setup/category/upload', categoryController.upload)

}
