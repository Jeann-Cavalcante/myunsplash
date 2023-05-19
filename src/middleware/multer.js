const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, path.resolve(__dirname, '..', '..', 'public', 'uploads'));
        },
        filename(req, file, cb) {
            const fileHash = crypto.randomBytes(16).toString("hex");
            const name = file.originalname.replace(/\s/g, '');
            const fileName = `${fileHash}=${name}`;
            cb(null, fileName);
        }
    }),
});

module.exports = upload;