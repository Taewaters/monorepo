exports = async function(arg) {
  let query = { $or: [{ state: "ON_CALL" }, { default: true }]}
  if (arg && arg.Caller) {
    query = { $and: [{ number: { $not: { $regex: `/^\\${arg.Caller}/` } }}, query ]}
  }
  var collection = context.services.get("mongodb-atlas").db("DHRA_PROXY").collection("fieldAgents");
  var cursor = collection.find(query).sort({onCall: -1, lastSession: 1});
  const runners = await cursor.toArray();
  return runners[0];
};
