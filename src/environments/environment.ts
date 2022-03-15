// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  // replace the data below with your personal data
  personal: {
    caricature: "DanielCaricature@2png",
    name: "Daniel Fernandes Pinho",
    birth: "1997-08-02",
    email: "danielfernandespinho1@gmail.com",
    phone: "+55 31 99151 3183",
    location: "Contagem, Minas Gerais, Brazil"
  },
  // replace the dummy data below with the real firebase configs
  firebaseConfig: {
    apiKey: "AIzaSyAsTv4FruWKG1zKAGYDdLC2jlr689jUtcI",
    authDomain: "danielfernandes.firebaseapp.com",
    projectId: "danielfernandes",
    storageBucket: "danielfernandes.appspot.com",
    messagingSenderId: "181170945174",
    appId: "1:181170945174:web:29695613b12bf8c19296b7",
    measurementId: "G-2P8HNW5PY3"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
