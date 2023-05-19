const upload = require('../middleware/multer');
const { createGallery } = require('../controllers/GalleryController');
const routes = require('express').Router();



routes.get('/', (req, res) => {
  try {
    
    return res.render('index');
  } catch (error) {
    console.log(error);
  }
});

routes.post('/create', upload.single('image'), createGallery);

module.exports = routes;