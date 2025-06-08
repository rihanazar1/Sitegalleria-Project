const axios = require('axios');

module.exports.editMessage = async (token, channel, ts) => {
  try {
    const response = await axios.post(
        'https://slack.com/api/chat.update',
        {
        channel,
        ts,
        text: "✏️ Edited message by Rihan!",
        },
        {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            },
        }
        );
        console.log('Message edited:', response.data);
    }
  
    catch (error) {
        console.error('Failed to send message:', error);
    }

}