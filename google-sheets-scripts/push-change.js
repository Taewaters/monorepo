function onEdit(e) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("FieldAgents");
  var headerRows = 2;  // Number of rows of header info (to skip)

  var range = sheet.getDataRange(); // determine the range of populated data
  var numRows = range.getNumRows(); // get the number of rows in the range
  var numColumns = range.getNumColumns();
  var data = range.getValues();

  var payload = {
      "range": e.range,
      "header": data[0],
      "row": e.range.getRow(),
      "column": e.range.getColumn(),
      "value": e.value,
      "fullRow": data[e.range.getRow() - 1]
    };

  const url = 'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/dhra-webservice-usyzs/service/google-sheets-updater/incoming_webhook/update_from_google_sheet'

  const options = {
    method: 'POST',
    contentType: 'application/json',
    muteHttpExceptions: true,
    payload: JSON.stringify(payload)
  }

  let resp = UrlFetchApp.fetch(url, options);
  console.log(JSON.stringify(resp));
}
