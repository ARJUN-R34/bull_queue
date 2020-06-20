// Mail queue 
const { sendMailQueue, quotationQueue } = require('./queues/');

// Data for email job
const mailData = {
    email: 'arjun@inblox.me',
    verificationLink: 'https://www.google.com',
    emailTemplateId: 'd-bb9043de99e943f08fa19b921492ac36',
    inbloxHandleName: 'arjunhere',
};

// Wait 5 seconds before process and try to run 3 times
const jobOptions = {
    delay: 5000,
    attempts: 3,
};

// Add email send job to queue
sendMailQueue.add(mailData, jobOptions);
