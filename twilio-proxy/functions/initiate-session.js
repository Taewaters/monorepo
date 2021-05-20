function createSession(client, uniqueName) {
  const options = (uniqueName) ? {uniqueName: uniqueName} : undefined;
  return client.proxy.services(process.env.PROXY_SERVICE_SID)
            .sessions
            .create(options)
            .then(session => {
              console.log('sessionid:', session.sid);
              return session;
            });
            .then(session => ([client, session]))
}

exports.handler = function(context, event, callback) {
  const client = context.getTwilioClient();


}
