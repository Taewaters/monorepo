exports = async function(arg){
  const {google} = require('googleapis');

  const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
  const privatekey = context.values.get("googlePrivateKeyJson");
  console.log(privatekey.client_email);
  console.log(privatekey.private_key);

  let jwtClient = new google.auth.JWT(
         privatekey.client_email,
         null,
         privatekey.private_key,
         SCOPES,
         null);
  return new Promise((resolve, reject) => {
    jwtClient.authorize(function (err, tokens) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("Successfully connected!");
        resolve(jwtClient);
      }
    });
  })
};
