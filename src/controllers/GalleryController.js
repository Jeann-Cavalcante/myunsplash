const prisma = require("../prisma");

async function getGallery(req, res) {
    try {
      const gallery = await prisma.gallery.findMany();
      return res.render('index', { gallery });
    } catch (error) {
      
    }
}

async function createGallery(req, res) {
    try {
      const {name} = req.body;
      const {filename} = req.file;
      console.log(filename, name);
      const gallery = await prisma.gallery.create({
        data: {
          name,
          image: filename
        }
      }).catch((error) => {
        console.log(error);
      });
      return res.redirect('/');

    } catch (error) {
      console.log(error);
    }
}


module.exports = {
    getGallery,
    createGallery
};