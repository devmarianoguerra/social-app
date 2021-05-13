import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXkH95clF2Qu2psulgJWiVevsik3u-WZE",
  authDomain: "social-app-319f7.firebaseapp.com",
  projectId: "social-app-319f7",
  storageBucket: "social-app-319f7.appspot.com",
  messagingSenderId: "694228125942",
  appId: "1:694228125942:web:4e77e886414553765a44d7",
  measurementId: "G-W5SW92W8WT",
};

try {
  firebase.initializeApp(firebaseConfig);
  //console.log('GITHUB LOG SUCCESS')
} catch (err) {
  console.error("GITHUB LOG ERROR: ", err);
}

//firebase.app.length === 0 && firebase.initializeApp(firebaseConfig);

const getUserData = (user) => {
  //console.log("GITHUB USER: ", user);
  const { displayName, email, photoURL } = user;

  return {
    userAvatar: photoURL,
    userName: displayName,
    email,
  };
};

export const gitHubLogin = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(gitHubProvider)
    .then((user) => {
      return getUserData(user);
    });
};

export const onAuthChange = (onChange) => {
  //console.log("onauthchange: ", onChange);
  return firebase.auth().onAuthStateChanged((user) => {
    //console.log("AUTH USER: ", user);
    const authUser = getUserData(user);
    //console.log("AUTH UPDATED USER: ", authUser);
    onChange(authUser);
  });
};
