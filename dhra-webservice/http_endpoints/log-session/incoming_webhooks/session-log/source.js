// This function is the webhook's request handler.
exports = async function(payload, response) {
    const body = EJSON.parse(payload.body.text())

    const resp = await context.functions.execute("add_session", body);

    return resp;
};
