const {google} = require('googleapis');

const contextContent = {
  fieldAgentSheetId: '1sBa-PxA5gBe0FYq_mvoa3YmkGwuJ2DVDSIJ8n-wkfKs',
  google_json_no_priv: {
    "type": "service_account",
    "project_id": "dhra-runner-dev",
    "private_key_id": "da86b6c52367d9d262fa571c555237d3a005bb6e",
    "client_email": "mongodb-realm@dhra-runner-dev.iam.gserviceaccount.com",
    "client_id": "106140200069677104329",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/mongodb-realm%40dhra-runner-dev.iam.gserviceaccount.com"
  },
  GSheetsPrivateKeyVal: "-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfKGm%2FYw2ey5A9%0A0d8Mt0e0Qh41dIialXgPoHQc495U2j1EJyVJ4LwV%2Bhhbk8lH2Y8cL%2BkIRLq0xIQk%0A%2B1T7pAM%2B77D1n7KAv63zHy6jpJFLNDuf3OPWdz6Yax8qHV1H2PSvvmibRrUeeBj0%0AUV7imx4bMk9y3Q5SkUhBaFTsfdJSSJ%2FzIJc%2BjGxXqCFHwRPs2vfGoOWBctCEVAsZ%0AR14JdudyvUQOPbFahH8DLHPONyd2KOBoUNQFeM3ObWoImz3D7J2wdyqJ8TbjQsP4%0ABPCKuOl%2BVVNCAWSkv08Gn7ivHvlv7oDGFf3biVgAiXmroyGg1YiNNDh61eSarIVj%0Ak6fWq46pAgMBAAECggEADtjEwJM7ZohDvNiSj4ubVz%2FhtIfZ5F20FPUZT8ab61tu%0AYqiqLFGYCg7J7eUD3j13wZ%2Fgg6JxrkI0t4RwgYbjvJ%2B8aLVMgAEhd2%2F9uEs2OIc3%0AVqrS4CNAhhRcFGAn3vdon%2BpJtM5sP9rhLQ1YJhhlPxE64xKm7uHZlSxn26XDFGTH%0AOTNswBsnYV92aMo9wv7hriBnvEM1gtj4OE%2FH%2F3qSHgG0mddm4qCSGEHcLzKZyCLe%0A3NA5%2Fdr9ij5NjecUl3mmoTPRQv8wsuyVA1S7NpURblE8NFmQS8YUuJi28OjP37qi%0ATfOTkwR%2BmAUsH%2FlopZtZLiQvijafH%2BkEdwX7ZAqwwQKBgQDWLWvXcp0oxQpGzYGM%0AGC2wISmdoi4uWqvwSEJy1RzOZFsHDh3zdX2PymR2QOTHHIoA5zLWRT6PCzAztL%2BF%0AL%2Bt69%2F5E%2F7%2F0rngoA3Lm9OyiEAAMB66eH7IFVm2AMQ16jshOrhZhBXUVywth9PTB%0ACaQTd343EZ8jTB%2BVLcq3PfgQcQKBgQC%2BPJpD%2FkWWwWBJOaEjUmuM6BBWhW24yyWJ%0AgANLK4jTamO4Zx1C%2FdxMAIZQCt7jIqII3mOS7O3picXbeN6nB8cCZkuxz8TbsUsq%0Aqtxs%2B2%2FHEcMyr09AfHOr2w61oRtTA6Hu%2FHiQ8J%2FtLp0tq7AMFk217Y8TVmfMBn%2Fb%0Alc4y3Kj9uQKBgQCf2XygazFyqUUXPPAQMEeBKe8WcGHJRPEIv9WgQQBj5jCuHlIq%0AT6kr9WFvhNV66gjxzZx6oWmkdzQ9kwxSCkbVG1wSAVMx%2BjlBm%2FlY%2BLnX5tsyH1Wr%0APHqwUyYcw%2F%2BMVh6X4oRfWyRc5JMVRC6cGGb2BHwV%2B7frLzhvLaMbikuncQKBgBHt%0AZBxEOgqa7pf39ld9zOTaea%2Bto0lm24K5rZXH5H0H6Z3XGcrWYYxIAGBKpfaBrQNo%0A8blG2qTHdv3XxiO3d%2Bmh%2BkAndEW%2Fz3WV5G%2FgwgfghKSiILXTBJONcTVsmUaZcQk0%0AgagnBOs1GVrUcyKwd2JNoM4RtnZjpmjrFSN15%2FcBAoGBAIzp7g704GrwCcbPnHZU%0A7IKkvSoZL8qxKokJ7YyEQAJp8s%2FE4yf6e95QXpVjwsUB0Ea9UuE8WQOo9FJ%2BTraE%0AM8nFi%2Fa1CotD8ugcSoZyFwV6itE95IUi%2FEi0e6S41U%2FBYk8MQAOPNJ9sA7HHIHxk%0AEnU%2FYyBOwG3IKs1V0kXJPwmD%0A-----END%20PRIVATE%20KEY-----%0A",
  google_scopes: ['https://www.googleapis.com/auth/spreadsheets']
}

const context = { values: { get: (arg) => contextContent[arg]}}

context.values.get('fieldAgentSheetId');

const changeEvent = {
  fullDocument: {"_id":"aaaa11a28e69a79579b0dd5","name":"Nidkddkdkdk","number":"+11828836042","onCall":true,"state":"ON_CALL","active":true,"default":false,"lastSession":1621979812333},
};

function getPrivateKey(context) {
  const key = context.values.get('google_json_no_priv');
  key["private_key"] =
    decodeURIComponent(context.values.get('GSheetsPrivateKeyVal'))
  return key;
}

function getScopes(context) {
  return context.values.get('google_scopes');
}

function auth() {
  return new Promise((res, rej) => {
    let key = getPrivateKey(context)
    let jwtClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      getScopes(context));
    jwtClient.authorize((err, tokens) => {
      if (err) {
       console.log(err);
       rej(err);
     } else {
       console.log("Successfully connected!");
       res(Object.assign({}, arguments[0], {jwtClient: jwtClient}));
     }
   });
  });
}

async function getSheet({jwtClient}) {
  let spreadsheetId = context.values.get('fieldAgentSheetId');
  let range = 'FieldAgents!A1:Z'
  const sheets = google.sheets('v4');
  const results =  (await sheets.spreadsheets.values.get({
    auth: jwtClient,
    spreadsheetId: spreadsheetId,
    range: range
  })).data;
 return Object.assign(
   {}, arguments[0], {sheetId: spreadsheetId, data: results, range:range});
}

function buildRow(sheet, doc) {
  const fields = sheet[0]
  return fields.map(field => doc[field] || "")
}

function getRowFromRangeString(range) {
  rowNumRegex = /(^\w*\!\w)(\d*):(\w)(\d*)/
  matches = range.match(rowNumRegex)
  if (matches) {
    return parseInt(matches[2])
  } else {
    return null;
  }
}

function makeUpdateRange(oldRange, oldValues, id) {
  rowNumRegex = /(^\w*\!\w)(\d*):(\w)(\d*)/
  matches = oldRange.match(rowNumRegex)
  const row = getSheetIndexById(oldRange, oldValues, id);
  if (matches) {
    return `${matches[1]}${row}:${matches[3]}${row}`;
  } else {
    return null;
  }
}

function getSheetIndexById(range, values, id) {
  console.log('id', id);
  let arrayIndex = -1
  for (let i = 0; i < values.length; i++) {
    if (values[i][0] === id) {
      console.log('ayay')
      arrayIndex = i;
    }
  }
  if (arrayIndex !== -1) return arrayIndex + getRowFromRangeString(range);
  else return -1;
}

async function update({doc, jwtClient, sheetId, data, range}) {
  let index = getSheetIndexById(data.range, data.values, doc['_id'].toString());

  let method = 'update'
  let reqRange = range
  if (index === -1) {
    method = 'append'
  } else {
    reqRange = makeUpdateRange(data.range, data.values, doc['_id'].toString());
  }

  console.log(range);
  const results =  (await google.sheets('v4').spreadsheets.values[method]({
    auth: jwtClient,
    spreadsheetId: sheetId,
    range: reqRange,
    valueInputOption: "USER_ENTERED",
    resource: {
      majorDimension: "ROWS",
      values: [buildRow(data.values, doc)]
    }
  })).data;
  console.log('BUILDT:', buildRow(data.values, doc))
  return Object.assign({}, arguments[0], {updateResult: results});
}

function getDocument(changeEvent) {
  return Promise.resolve({doc: changeEvent.fullDocument})
}

getDocument(changeEvent)
  .then(auth)
  .then(getSheet)
  .then(x => {console.log(x); return x;})
  .then(update)
  .catch(err => console.log(err));
