// This function is the webhook's request handler.
exports = function(payload, response) {
  const data = EJSON.parse(payload.body.text());
  const results = context.functions.execute("update_from_google_sheets", data);
  return results;
};
