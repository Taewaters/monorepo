// const { MongoClient } = require("mongodb");
// const { Realm } = require("realm-web");
// const app = new Realm.App({ id: "<Your App ID>" });
//
// const DB_USER = process.env.DB_USER
// const DB_PASS = encodeURIComponent(process.env.DB_PASS)
// const DB_URL = process.env.DB_URL
// const DB_DEFAULT = process.env.DB_DEFAULT
//
// const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_URL}/${DB_DEFAULT}?retryWrites=true&w=majority`
// console.log(uri);
// const client = new MongoClient(uri);
//
// function sortByAvailability(a, b) {
//   if (a.onCall === false) return -1;
//   if (a.lastSession < b.transation) return 1;
//   if (a.lastSession === b.lastSession) return 0;
//   if (a.lastSession > b.lastSession) return -1;
// }
//
// function getAgent(client) {
//   const cursor = client.db(DB_DEFAULT)
//     .collection('fieldAgents')
//     .find({ $or: [{ onCall: true }, { default: true }]})
//     .toArray((err, arr) => agent.fill(arr))
// }
//
// async function selectFieldAgent(client) {
//   try {
//     await client.connect()
//     await getAgent(client).catch(err => console.error(err));
//   } catch(err) {
//     console.error(err);
//   } finally {
//     client.close;
//   }
// }
//
// function selectFieldAgent() {
//   return connectToDb().then(x => '+12816736042').catch(x => '+12816736042');
// }



const runners = [
   {
      "_id":"60a0c11a28e69a79579b0dd4",
      "name":"Abby Brown",
      "number":"+12147794932",
      "onCall":false,
      "active":true,
      "default":true,
      "lastSession":1621145225236
   },
   {
      "_id":"60a0c11a28e69a79579b0dd5",
      "name":"Nick Cassiani",
      "number":"+12816736042",
      "onCall":false,
      "active":true,
      "default":false,
      "lastSession":1621145225400
   },
   {
      "_id":"60a0c11a28e69a79579b0dd5",
      "name":"Emily",
      "number":"+14792700897",
      "onCall":true,
      "active":true,
      "default":false,
      "lastSession":1621145225400
   },
   {
      "_id":"60a0c11a28e69a79579b0dd6",
      "name":"Maddy Freeman",
      "number":"+2146736042",
      "onCall":false,
      "active":true,
      "default":false,
      "lastSession":1621150674288
   },
   {
      "_id":"60a0c11a28e69a79579b0dd7",
      "name":"Candice Starns",
      "number":"+12147183482",
      "onCall":false,
      "active":true,
      "default":false,
      "lastSession":1621145225236
   },
   {
      "_id":"60a0c11a28e69a79579b0dd8",
      "name":"Nick Moreno",
      "number":"+19726554624",
      "onCall":true,
      "active":true,
      "default":false,
      "lastSession":1621145233333
   }
]

const randomRunner = (runners) => {
  return runners.filter(r => (r.onCall || r.default))
    .sort((a, b) => {
      if (!a.onCall && a.default) return -1;
      else return (([-1, 1])[(Math.floor(Math.random() * 2))])
    })
}

const isAvailableLongestSinceCallElseDefault = (runners) => {
  return runners.filter(r => (r.onCall || r.default))
    .sort((a, b) => {
      // Default is Last if they're unavailable
      if (!a.onCall && a.default) return -1;
      // Longest time since call
      if (a.lastSession < b.lastSession) return 1;
      else if (a.lastSession === b.lastSession) return 0;
      else return -1
    })
}

const pickNickC = (runners) => runners.filter(r => r.name === "Nick Cassiani")

function selectFieldAgent(strategy) {
  return Promise.resolve(strategy(runners)[0]);
}

exports.handler = function(context, event, callback) {
  console.log("NEW SESSION EVENT:", event)
  selectFieldAgent(randomRunner)
    .then(agent => {
      console.log(agent);
      callback(null, {
        ttl: 3360,
        mode: 'voice-and-message',
        participantIdentifier: agent.number
      })
  })
}
