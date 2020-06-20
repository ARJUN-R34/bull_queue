const axios = require('axios');

const sendMail = async (data) => {
    try {
      const response = await axios({
        url: 'http://localhost:3001/email/send',
        method: 'post',
        data,
        headers: {
          'cache-control': 'no-cache',
        },
      });
  
      return { response };
    } catch (error) {
      return { error: [ { name: 'server', messages: 'There is some issue, Please try after some time' } ] };
    }
  };

module.exports = { sendMail };