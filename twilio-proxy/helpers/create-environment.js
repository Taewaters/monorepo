const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function createEnvironment(environments, serviceSid, suffix, unique) {
  return client.serverless.services(serviceSid)
                  .environments
                  .create({domainSuffix: suffix, uniqueName: unique})
                  .then(environment => { environments[suffix] = environment });
}

exports.helper = function(serviceSid) {
  const accountSid = process.env.ACCOUNT_SID;
  const authToken = process.env.AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  const env = {}

  console.log('creating dev, stage, and prod environments');
  return createEnvironment(env, serviceSid, 'dev', 'development')
  .then(env => createEnvironment(env, serviceSid, 'stage', 'staging'))
}
