const fetch = require('node-fetch');
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const sid = process.env.DHRA_FEILD_HELP_SERVICE_SID
const client = require('twilio')(accountSid, authToken);

console.log(sid);

function wait(delay) {
  return new Promise(resolve => setTimeout(resolve, delay))
}

wait(2000)
  .then(x => fetch("http://localhost:4040/api/tunnels"))
  .then(res => res.json())
  .then(r => r.tunnels.filter(t => (t.proto === 'https'))[0])
  .then(tunnel => tunnel.public_url)
  .then(url => {
    client.proxy.services(sid)
      .update({
        outOfSessionCallbackUrl: `${url}/out-of-session`,
        callbackUrl: `${url}/proxy-callback`,
        interceptCallbackUrl: `${url}/proxy-intercept`
      })
      .then(service => console.log(service.uniqueName));
  })
  // .then(res => res.tunnels.filter(res.proto === "https")[0].publicUrl)
  // .then(res => console.log(HTMLParser.parse(res).querySelector("ul.tunnels")));



  // client.proxy.services(process.env.DHRA_FEILD_HELP_SERVICE_SID)
  //             .update({
  //               outOfSessionCallbackUrl: 'unique_name',
  //               callbackUrl
  //             })
  //             .then(service => console.log(service.uniqueName));
