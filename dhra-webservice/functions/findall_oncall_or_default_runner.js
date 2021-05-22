exports = function(arg) {
  var collection = context.services.get("DHRA-Cluster0").db("DHRA_PROXY").collection("fieldAgents");
  var cursor = collection.find({ $or: [{ onCall: true }, { default: true }]}); //.sort({onCall: -1, lastSession: 1});
  const runners = cursor.toArray();
  return runners
  /*
    Accessing application's values:
    var x = context.values.get("value_name");

    Accessing a mongodb service:
    var collection = context.services.get("mongodb-atlas").db("dbname").collection("coll_name");
    var doc = collection.findOne({owner_id: context.user.id});

    To call other named functions:
    var result = context.functions.execute("function_name", arg1, arg2);

    Try running in the console below.
  */
  //return {arg: arg};
};