const upload = require('../middleware/multer');
const { createGallery, getGallery } = require('../controllers/GalleryController');
const routes = require('express').Router();



routes.get('/', getGallery);

routes.post('/create', upload.single('image'), createGallery);

module.exports = routes;