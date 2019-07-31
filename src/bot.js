const {twitter, accountData} = require('./twit');
const content = require('./content');

//Returns the number of Tweets that the account has posted + 1
function nextTweetNumber() {
    return twitter.get("users/show", {user_id: accountData.user_id, sceen_name: accountData.sceen_name}).then(data => data.data.statuses_count + 1);
}

//Logs the response in the console
function logResponse(err, message) {
    if(err) {
        console.log(`ERROR: ${err}`);
    }
    else {
        console.log(`Successfully posted tweet: ${message.status}`);
    }
}

//Post a tweet.
function tweet() {
    nextTweetNumber().then(nextNumber => {
        const message = {
            status: `[${nextNumber}] ${content.randomPhrase()}`
        }

        
        twitter.post("statuses/update", message, (err, data, response) => logResponse(err, message));
    });
}

module.exports = tweet;