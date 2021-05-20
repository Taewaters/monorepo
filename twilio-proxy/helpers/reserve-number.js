const args = require('./get-args');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.proxy.services('KSf62edecd4627281cc471dc05cd51ecaf')
            .phoneNumbers(arg[0])
            .update({isReserved: true})
