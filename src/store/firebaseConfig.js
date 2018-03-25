import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();

export default {
  apiKey: env.REACT_APP_FIREBASE_API_KEY,
  authDomain: env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};
