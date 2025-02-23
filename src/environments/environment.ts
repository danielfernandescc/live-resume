// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // replace the data below with your personal data
  personal: {
    caricature: "DanielCaricature@2png",
    name: "Daniel Fernandes Pinho",
    birth: "1997-08-02",
    email: "danielfernandespinho1@gmail.com",
    phone: "+55 31 99151 3183",
    location: "Florestal, Minas Gerais, Brazil"
  },
  // replace the dummy data below with the real firebase configs
  firebaseConfig: {
    apiKey: "AIzaSyBQF2QpdvW2BeSBWRj7lyqQHgBn79ud1r8",
    authDomain: "danielfernandeswebsite.firebaseapp.com",
    projectId: "danielfernandeswebsite",
    storageBucket: "danielfernandeswebsite.appspot.com",
    messagingSenderId: "315941422920",
    appId: "1:315941422920:web:fbfe79d4ac6eebf4d2957d",
    measurementId: "G-PGLC0K6TRS"
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
