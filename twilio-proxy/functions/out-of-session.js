const axios = require('axios');

const REALM_API_KEY = process.env.REALM_API_KEY;
const API_BASE_URL = process.env.REALM_BASE_URL;
const PICK_AGENTS_PATH = process.env.REALM_SERVICE_PICK_AGENTS;
const REALM_SERVICE_LOG_SESSION = process.env.REALM_SERVICE_LOG_SESSION;

const getRunnersFromWebhook = async (event) => {
  console.log(`${API_BASE_URL}${PICK_AGENTS_PATH}`);
  return await axios
    .post(`${API_BASE_URL}${PICK_AGENTS_PATH}`,
      { "api-key": REALM_API_KEY, session: event })
    .then(resp => resp.data)
    .catch(err => console.error(err))
}

const selectFieldAgent = async (event, strategy) => {
  return Promise.resolve(strategy(event));
}

const logSession = (event, agent) => {
  console.log("AGENT:", agent)
  return axios
    .post(
      `${API_BASE_URL}${REALM_SERVICE_LOG_SESSION}`,
      {
        "api-key": REALM_API_KEY,
        agent: agent,
        session: event
      })
    .then(() => agent)
}

exports.handler = async (context, event, callback) => {
  console.log("NEW SESSION CONTEXT:", context)
  console.log("NEW SESSION EVENT:", event)
  selectFieldAgent(event, getRunnersFromWebhook)
    .then(agent => logSession(event, agent))
    .then(agent => {
      console.log("AG ", agent);
      callback(null, {
        ttl: 600,
        mode: 'voice-and-message',
        participantIdentifier: agent.number
      })
  })
}
