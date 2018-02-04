// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Datos de configuración Firebase
  firebase: {
    apiKey: 'AIzaSyAwtl31jv5C003FXeDe1fNYiTUgMYy7G1w',
    authDomain: 'exquisite-corpse-10673.firebaseapp.com',
    databaseURL: 'https://exquisite-corpse-10673.firebaseio.com',
    projectId: 'exquisite-corpse-10673',
    storageBucket: 'exquisite-corpse-10673.appspot.com',
    messagingSenderId: '867966335246'
  }
};
