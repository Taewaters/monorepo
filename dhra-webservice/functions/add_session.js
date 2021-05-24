exports = async function(arg){
  const hash = require('hash.js')
  const salt = context.values.get("salt");
  hashedCallerID = hash.sha256().update(`${arg.session.caller}${salt}`).digest('hex')
  const result = await context.services.get("mongodb-atlas")
    .db("DHRA_PROXY")
    .collection("sessions")
    .insertOne({
      caller: hashedCallerID,
      fieldAgent: arg.agent.number,
      startDateTime: arg.session.sessionDateCreated
    });

    await context.services.get("mongodb-atlas")
      .db("DHRA_PROXY")
      .collection("fieldAgents")
      .updateOne(
        { number: arg.agent.number },
        {
          $set: {
            lastSession: (Date.now())
          }
        })




  return {arg: arg};
};
