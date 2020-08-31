# amazon-alexa-notification-github-action
Get notifications on your Amazon Alexa device through GitHub actions


## Steps

### 1. Enable the NotifyMe skill on your Alexa App
```
Alexa, enable NotifyMe
```
Go to your Alexa app on your mobile device to link the skill with your account. This will allow the skill to tie the API credentials to your email account.

### Optional: Turn on the notification indicator for this skill:

Steps:


### 2. Login to https://www.getnotify.me/ for credentials

Here you can send a test message to you Alexa  device and generate credentials for to use with the API. 

### 3. Setup you action on your repository

This action cab be triggered from any of the available [events](https://docs.github.com/en/actions/reference/events-that-trigger-workflows)

Here is an example for an issue being opened:
```yaml
on:
  issues:
    types: [opened]

jobs:
  # This workflow contains a single job called "alexa-notify"
  alexa-notify:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
    # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
    - uses: actions/checkout@v2

    # Runs a single command using the runners shell
    - name: Run Alexa notification
      uses: tonydiaz/amazon-alexa-notification-github-action@master
      with:
        api-key: ${{ secrets.ALEXA_KEY }}
        api-secret: ${{ secrets.ALEXA_SECRET }}
        message: "A new issue was posted to Alexa notifications repository
```