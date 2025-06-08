const axios = require('axios');

module.exports.scheduleMessage = async (token, channel) => {
  try {
     const postAt = Math.floor(Date.now() / 1000) + 60; // 1 min later

     const response = await axios.post(
        'https://slack.com/api/chat.scheduleMessage',
        {
        channel,
        text: '⏰ Scheduled message from Rihan!',
        post_at: postAt,
        },
        {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        }
     );
    console.log('Message scheduled:', response.data);
  } catch (error) {
    console.error('Failed to send message:', error);
  }

}


