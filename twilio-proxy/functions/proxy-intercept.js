exports.handler = function(context, event, callback) {
  // console.log("INTERCEPT EVENT:", event);
  callback(null, "go ahead");
}
