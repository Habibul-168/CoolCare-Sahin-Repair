const cloudinary = require('../config/cloudinary');
const { Readable } = require('stream');

/**
 * Upload a file buffer to Cloudinary.
 * Works with multer memory storage (req.file.buffer).
 * @param {Buffer} buffer - The file buffer from multer
 * @param {string} folder - Optional Cloudinary folder name
 * @returns {Promise<string>} The secure URL of the uploaded image
 */
const uploadToCloudinary = (buffer, folder = 'technician-portfolio') => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }
    );

    const readableStream = new Readable();
    readableStream.push(buffer);
    readableStream.push(null);
    readableStream.pipe(uploadStream);
  });
};

module.exports = uploadToCloudinary;
