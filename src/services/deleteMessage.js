const axios = require('axios');

module.exports.deleteMessage = async (token, channel, ts) => {
    try {
          const response = await axios.post(
            'https://slack.com/api/chat.delete',
            {
            channel,
            ts,
            },
            {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            }
        );
        console.log('Message deleted:', response.data);
    } catch (error) {
        console.error('Failed to send message:', error);
    }
}
