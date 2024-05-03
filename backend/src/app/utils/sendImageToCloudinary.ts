import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import multer from "multer";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const sendImageToCloudinary = async (imageName: string, imagePath: string): Promise<Record<string, unknown>> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(imagePath, { public_id: imageName }, function (error, result) {
      if (error) {
        reject(error);
      }

      resolve(result as UploadApiResponse);
      if (result) {
        fs.unlink(imagePath, (err) => {
          if (err) {
            reject(err);
          }
          resolve(result as UploadApiResponse);
        });
      }
    });
  });
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + "/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });
