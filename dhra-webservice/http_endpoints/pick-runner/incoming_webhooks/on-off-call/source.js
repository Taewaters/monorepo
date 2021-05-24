// This function is the webhook's request handler.
exports = async function(payload, response) {
    const contentTypes = payload.headers["Content-Type"];

    // Raw request body (if the client sent one).
    // This is a binary object that can be accessed as a string using .text()
    const body = EJSON.parse(payload.body.text());
    const onCall = (body.onCall == "ON") ? true : false; 

    // You can use 'context' to interact with other Realm features.
    // Accessing a value:
    // var x = context.values.get("value_name");

    // Querying a mongodb service:
    const resp = await context.services.get("mongodb-atlas")
      .db("DHRA_PROXY")
      .collection("fieldAgents")
      .updateOne(
        { number: body.number },
        {
          $set: {
            onCall: onCall
          }
      }).then(doc => doc.onCall)
      .catch(err => err);

    // Calling a function:
    // const result = context.functions.execute("function_name", arg1, arg2);

    // The return value of the function is sent as the response back to the client
    // when the "Respond with Result" setting is set.
    return {isOnCall: onCall};
};