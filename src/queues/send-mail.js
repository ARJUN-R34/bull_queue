const Queue = require('bull');
const sendMailJob = require('../jobs/send-mail');

// Create mail queue
const sendMailQueue = new Queue('sendMailQueue');

// Add function to process send mail job queue
sendMailQueue.process(sendMailJob);

module.exports = sendMailQueue;