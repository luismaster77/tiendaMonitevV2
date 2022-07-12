// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api_url_base: 'http://localhost:8081',
  api_url_epayco :'https://secure.epayco.co/validation/v1/reference/',
  api_url_response_detail_epayco:' https://apify.epayco.co/transaction/detail',
  api_url_auth_token_epayco: 'https://apify.epayco.co/login/mail',
  api_url_findAllPlanes: '/api/planes/findPlanes',
  api_url_findUserRequest: '/api/planes/findUser',
  api_url_login : '/api/login',
  firebaseConfig:{
    apiKey: "AIzaSyB49F2RA_p2PZ--2lSwEgAkrX3brd4p060",
    authDomain: "monitev-c6e55.firebaseapp.com",
    projectId: "monitev-c6e55",
    storageBucket: "monitev-c6e55.appspot.com",
    messagingSenderId: "368220260267",
    appId: "1:368220260267:web:b0e26569a684d1ba9074ee",
    measurementId: "G-LDGV2965NZ"
  }
};
