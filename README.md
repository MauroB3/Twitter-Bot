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

### Adding custom phrases

* Fill the [/src/content.js](https://github.com/MauroB3/Twitter-Bot/blob/master/src/content.js) file with your custom phrases.
```
"Put all your phrases here",
"This is an example",
```

### Customizing the time between tweets

The number of the following line in the [/src/index.js](https://github.com/MauroB3/Twitter-Bot/blob/master/index.js) file determines the time between each tuit (in milliseconds):
```
setInterval(tweet, 3600000);
```
By default it's set to an hour, but you can customize it as you wish.

### Run

* Just execute the following command (being in the source dir)
```
npm start
```

## Tweet format

Twitter doesn't allow us to tweet the same phrase twice, so we must add something that make the tweet unique. The easiest way to do that is just adding the number of the tweet at the beginning (which will always be unique).
```
[tweet number] Your phrase.
```

For example:
```
[1] I'm a tweet.
```

## Contribution

You can fork the repo and, if you want to apply your changes here, send a pull request. Any contribution is always welcome.



