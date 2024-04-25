import { Storage } from '@google-cloud/storage';

const storage = new Storage({
  projectId: 'cosmic-tensor-419312',
  keyFilename: '../service-account-key.json'
});

export default storage;


// Function to upload file to Google Cloud Storage
export async function uploadFile(bucketName, filename, file) {
  const bucket = storage.bucket(bucketName);
  const fileUpload = bucket.file(filename);

  const stream = file.createReadStream();
  const blobStream = fileUpload.createWriteStream({
    resumable: false,
    gzip: true
  });

  stream.pipe(blobStream);

  return new Promise((resolve, reject) => {
    blobStream.on('error', (error) => {
      reject(error);
    });

    blobStream.on('finish', () => {
      const publicUrl = `https://storage.googleapis.com/${bucketName}/${filename}`;
      resolve(publicUrl);
    });
  });
}

// Add more utility functions as needed