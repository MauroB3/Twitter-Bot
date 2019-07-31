//List of phrases that the bot will tweet
const phrases = [
        "Put all your phrases here",
		"This is an example",
    ];

//Pick a random phrase
exports.randomPhrase = () => {
    return phrases[Math.floor(Math.random() * phrases.length)]
};