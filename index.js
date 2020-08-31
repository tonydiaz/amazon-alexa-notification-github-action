const core = require('@actions/core');
const http = require("@actions/http-client");
const auth = require("@actions/http-client/auth");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const apiKey = core.getInput("api-key");
    const apiSecret = core.getInput("api-secret");
    const message = core.getInput("message");

    const notifyMeEndpoint = "https://api.getnotify.me/submit";
    const creds = new auth.BasicCredentialHandler(apiKey, apiSecret);
    const httpClient = new http.HttpClient('notify-me', [creds]);

    const body = {
      'message': message
    }
    let response = await httpClient.postJson(notifyMeEndpoint, body);
    console.log('response', response);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
