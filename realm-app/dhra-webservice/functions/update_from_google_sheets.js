exports = function(arg) {
  const data = arg.data;
  const runnerId = arg.fullRow[arg.header.indexOf('_id')];
  const key = arg.header[arg.column - 1];
  const value = arg.value;

  let collection = context.services
    .get("mongodb-atlas")
    .db("DHRA_PROXY")
    .collection("fieldAgents");

  let update = { $set: {} }
  update['$set'][key] = value

  const result = (await collection.update(
    {$eq:{"_id": runnerId},
    update
  }));


  console.log(JSON.stringify(result))
  return JSON.stringify(result);
}
