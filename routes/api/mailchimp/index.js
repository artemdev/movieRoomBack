const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
const MAILCHIMP_INSTANCE = process.env.MAILCHIMP_INSTANCE;

const subscribe = async function (req, res) {
  const { email } = req.body;
  mcData = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
      },
    ],
  };
  const mcDataPost = JSON.stringify(mcData);
  const url = `https://${MAILCHIMP_INSTANCE}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}`;
  axios.defaults.headers.common['Authorization'] = `auth ${MAILCHIMP_API_KEY}`;

  try {
    await axios.post(url, mcDataPost);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

router.post('/subscribe', subscribe);

module.exports = router;
