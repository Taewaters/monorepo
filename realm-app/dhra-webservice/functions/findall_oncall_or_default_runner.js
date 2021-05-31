exports = function(arg) {
  var collection = context.services.get("mongodb-atlas").db("DHRA_PROXY").collection("fieldAgents");
  var cursor = collection.find({ $or: [{ state: "ON_CALL" }, { default: true }]}).sort({onCall: -1, lastSession: 1});
  const runners = cursor.toArray();
  return runners;
};
