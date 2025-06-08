// require("dotenv").config()
const axios = require('axios');
// const token = process.env.SLACK_BOT_TOKEN;
// const channel = process.env.CHANNEL_ID;


module.exports.sendMessage = async (token, channel) => {
      try {
            const response = await axios.post(
            'https://slack.com/api/chat.postMessage',
            {
                channel,
                text: "👋 Hello from Rihan's bot!",
            },
            {
                headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                },
            }
            );
            console.log('Message sent:', response.data);
            return response.data.ts;

        } catch (error) {
            console.error('Failed to send message:', error);
        }
}

// sendMessage(token, channel)

