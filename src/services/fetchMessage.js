const axios = require('axios');

module.exports.fetchMessages = async (token, channel) => {
  try {
    const response = await axios.get('https://slack.com/api/conversations.history', {
        headers: {
        Authorization: `Bearer ${token}`,
        },
        params: {
        channel,
        limit: 5,
        },
    });

    console.log('Recent Messages:', response.data.messages);
    return response.data.messages;

  } catch (error) {
    console.error('Failed to send message:', error); 
  }

}



