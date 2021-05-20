const args = require('./get-args');
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

console.log(args)


if (args[0] === 'true' && args[1] === 'true' && args[2] === 'true') {
  client.serverless.services(args[3])
                   .environments
                   .create({domainSuffix: args[4], uniqueName: args[5]})
                   .then(environment => console.log(environment.domainName));
} else {
  console.error("Error: requires --sid, --suffix, and --name")
}
