// GoogleCloudController.js

import { Storage } from '@google-cloud/storage';

const storage = new Storage();
const bucketName = 'tareeq_app_bucket';
const bucket = storage.bucket(bucketName);

// Multer middleware for handling image upload
import multer from 'multer'; // Import Multer using ES6 import syntax
const upload = multer({ dest: 'uploads/' });

// Function to upload file to Google Cloud Storage
async function uploadToGCS(imagePath) {
    const fileName = 'image.jpg'; // Change the file name as needed
    await bucket.upload(imagePath, {
        destination: fileName,
    });
    return `https://storage.googleapis.com/${bucketName}/${fileName}`;
}

// Controller function for image upload
export async function uploadImage(req, res) {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }

    try {
        // Upload the file to Google Cloud Storage
        const imageUrl = await uploadToGCS(file.path);
        // File has been uploaded to GCS, you can now save the image URL to your database or return it in the response
        res.json({ imageUrl });
    } catch (error) {
        console.error('Error uploading image to GCS:', error);
        res.status(500).send('Failed to upload image.');
    }
}
