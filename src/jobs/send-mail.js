const { sendMail } = require('../mailer/index');

module.exports = async(job) => {
    // Extract data from job
    const { email, verificationLink, emailTemplateId, inbloxHandleName } = job.data;

    if (!email || !verificationLink || !emailTemplateId || !inbloxHandleName) {
        return Promise.reject(new Error('Missing params of job'));
    }

    try {
        const data = { email, verificationLink, emailTemplateId, inbloxHandleName }
        const mailResult = await sendMail(data);
        return Promise.resolve();
    } catch(err) {
        return Promise.reject(err);
    }
};