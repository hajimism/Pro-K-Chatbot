export const { IncomingWebhook } = require('@slack/webhook')

// Read a url from the environment variables
const url = process.env.REACT_APP_SLACK_WEBHOOK_URL

// Initialize
export const webhook = new IncomingWebhook(url)
