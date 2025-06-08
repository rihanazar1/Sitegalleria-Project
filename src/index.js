require("dotenv").config()
const {sendMessage} = require("./services/sendMessage")

const token = process.env.SLACK_BOT_TOKEN;
const channel = process.env.CHANNEL_ID;

const runnerFunction = async () => {
    const ts = await sendMessage(token, channel);
}

runnerFunction()