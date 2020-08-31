const core = require('@actions/core');
const github = require('@actions/github');
const http = require("@actions/http-client");
const auth = require("@actions/http-client/auth");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const githubSecret = core.getInput("github-secret");
    const apiKey = core.getInput("api-key");
    const apiSecret = core.getInput("api-secret");
  
    const octokit = new github.GitHub(githubSecret);
    const comment = github.context.payload.comment;
    const notifyMeEndpoint = "https://api.getnotify.me/submit";
    const creds = new auth.BasicCredentialHandler(apiKey, apiSecret);
    const httpClient = new http.HttpClient('notify-me', [creds]);
    console.log(github.context);
    const body = {
      'message': 'hello world'
    }
    let response = await httpClient.postJson(notifyMeEndpoint, body);
    console.log('response', response);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
