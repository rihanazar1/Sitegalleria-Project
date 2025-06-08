require("dotenv").config()
const {sendMessage} = require("./services/sendMessage")
const {editMessage} = require("./services/editMessage")
const {fetchMessages} = require("./services/fetchMessage")
const {deleteMessage} = require("./services/deleteMessage")
const {scheduleMessage} = require("./services/scheduleMessage")

const token = process.env.SLACK_BOT_TOKEN;
const channel = process.env.CHANNEL_ID;

const runnerFunction = async () => {
    // const ts = await sendMessage(token, channel);
    // await editMessage(token, channel, ts);
    // await deleteMessage(token, channel, ts);
    // await fetchMessages(token, channel);
    await scheduleMessage(token, channel)
}

runnerFunction()