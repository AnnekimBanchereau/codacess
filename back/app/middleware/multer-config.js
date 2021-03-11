var express = require('express')
const { Picture, Client } = require('../models');
const multer =require('multer');

//traduit les données envoyés par le front
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    //callback(null, 'storage file')
    callback(null, 'assets/images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
   //timestamp for unique name with Date.now()
    callback(null, Date.now() +'_'+ name);
  }
});

var upload = multer({storage:storage}).single('image');

module.exports = {
  imageToClient: async (req,res,next) => {
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
         return res.status(500).json(err)
      } else if (err) {
        return res.status(500).json(err)
      }
      const client_id = req.user.clientId
      const myFile = req.file

      const picture = new Picture({
        name: myFile.filename,
        path: myFile.path,
        alternative: null
      })

      picture.save().then(result => {
        Client.findByPk(client_id, {
          include:'client_picture'
        }).then(user => {
          user.update({picture_id: result.id})
          return res.status(200).json(
            user
            );
        })
      });
    })
  }
}