// This function is the webhook's request handler.
exports = async function(payload, response) {
    const session = EJSON.parse(payload.body.text()).session;
    var toRun = await context.functions.execute("get_selection_function_name");
    return  context.functions.execute(toRun, session);
};