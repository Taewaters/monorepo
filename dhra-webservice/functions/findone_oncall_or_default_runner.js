exports = async function(arg) {
  let query = { $or: [{ onCall: true }, { default: true }]}
  if (arg && arg.Caller) {
    query = { $and: [{ number: { $not: { $regex: `/^\\${arg.Caller}/` } }}, query ]}
  }
  var collection = context.services.get("mongodb-atlas").db("DHRA_PROXY").collection("fieldAgents");
  var cursor = collection.find(query).sort({onCall: -1, lastSession: 1});
  const runners = await cursor.toArray();
  return runners[0];
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