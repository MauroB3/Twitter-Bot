"use strict";
var Twit = require('twit')

const accountData = {
      user_id: "...", 
      sceen_name: "...",
      consumer_key:         '...',
      consumer_secret:      '...',
      access_token:         '...',
      access_token_secret:  '...',
}

const twitter = 
     new Twit({
      consumer_key:         accountData.consumer_key,
      consumer_secret:      accountData.consumer_secret,
      access_token:         accountData.access_token,
      access_token_secret:  accountData.access_token_secret,
      });

module.exports = {twitter, accountData};