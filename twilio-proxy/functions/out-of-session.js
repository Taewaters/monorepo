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
      "onCall":true,
      "active":true,
      "default":false,
      "lastSession":1621145225400
   },
   {
      "_id":"60a0c11a28e69a79579b0dd5",
      "name":"Emily",
      "number":"+14792700897",
      "onCall":false,
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
      "onCall":false,
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
const pickMaddy = runners => runners.filter(r => r.name === "Maddy Freeman")

function selectFieldAgent(strategy) {
  return Promise.resolve(strategy(runners)[0]);
}

exports.handler = function(context, event, callback) {
  console.log("NEW SESSION EVENT:", event)
  selectFieldAgent()
    .then(agent => {
      console.log(agent);
      callback(null, {
        ttl: 3360,
        mode: 'voice-and-message',
        participantIdentifier: agent.number
      })
  })
}
