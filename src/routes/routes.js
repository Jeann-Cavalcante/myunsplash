const routes = require('express').Router();

routes.get('/', (req, res) => {
  try {
    
    return res.render('index');
  } catch (error) {
    console.log(error);
  }
});

module.exports = routes;