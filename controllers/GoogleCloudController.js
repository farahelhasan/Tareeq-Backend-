import storage, { uploadFile } from '../config/GoogleCloudStorage.js';

export async function uploadFileToGoogleCloud(req, res) {
  const { bucketName, filename, file } = req.body;

  try {
    const publicUrl = await uploadFile(bucketName, filename, file);
    res.status(200).json({ publicUrl });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading file to Google Cloud Storage' });
  }
}
