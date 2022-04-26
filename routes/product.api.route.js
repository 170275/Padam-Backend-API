
const productController = require("../controllers/product.controller");


module.exports = function(app) {


  app.get('/api/setup/product/getByCat/:id', productController.getByCat),
  app.post('/api/setup/product/getByName', productController.getByName),
  app.get('/api/setup/product/getByBrand/:id', productController.getByBrand)


  app.get('/api/setup/product/grid/list', productController.getList),
  app.post('/api/setup/product/create', productController.create),
  app.put('/api/setup/product/update', productController.update),
  app.get('/api/setup/product/get/:id', productController.getById),
  app.delete('/api/setup/product/delete/:id', productController.remove),
  app.post('/api/image/upload',productController.upload);
 

}
