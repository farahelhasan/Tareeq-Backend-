import { Storage } from '@google-cloud/storage';

const storage = new Storage({
  projectId: 'cosmic-tensor-419312',
  keyFilename: '../service-account-key.json'
});

export default storage;
