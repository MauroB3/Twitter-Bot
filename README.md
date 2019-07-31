# Twitter Bot

This is a bot for twitter that publishes random phrases from a list every certain time.

## Steps to run it

### Installation

* Install [Node.js](https://nodejs.org/)
* Clone this repo
```
git clone https://github.com/MauroB3/Twitter-Bot.git
```
* Install dependencies
```
npm install
```

### Connecting to Twitter

* Create your twitter developer account [here](https://developer.twitter.com)
* Create a twitter app [here](https://developer.twitter.com/en/apps)
* In the app that you've created, go to "Keys and tokens" and fill that info en the [/src/twit.js](https://github.com/MauroB3/Twitter-Bot/blob/master/src/twit.js) file. 
```
  user_id: "...", 
  sceen_name: "...",
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
```
* Also replace the screen_name (your account name) and user_id (which you can get [here](https://https://tweeterid.com))

### Run

* Just execute the following command (being in the source dir)
```
npm start
```

## Contribution

You can fork the repo and, if you want to apply your changes here, send a pull request. Any contribution is always welcome.



