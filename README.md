# Movies mobile app :movie_camera:

> Mobile app built with React Native

Built with React Native and Firebase for authentication.

## Firebase setup

In the project root directory create file `firebase_config.js`:

```javascript
const config = {
  apiKey: "firebase-api-key",
  authDomain: "firebase-auth-domain",
  databaseURL: "firebase-database-url",
  storageBucket: "firebase-storage-bucket",
  messagingSenderId: "firebase-msg-sender-id"
};

export default config;
```

Update this file using credentials from the Firebase project console. For more information follow this [link to the Firebase documentation.](https://firebase.google.com/docs/web/setup)

## Development

In the project root directory, run:

#### Android

```sh
react-native run-android
```

#### iOS

```sh
react-native run-ios
```
