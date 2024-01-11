const TelegramBot = require('node-telegram-bot-api');
const env = require('dotenv').config();

const APP_TOKEN = process.env.APP_KEY;
console.log(APP_TOKEN);
const WEB_APP_URL = process.env.WEB_APP_URL;
console.log(WEB_APP_URL);
const bot = new TelegramBot(APP_TOKEN, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    const name = msg.from.first_name;
    const lastName = msg.from.last_name;
    const username = msg.from.username;
    if (messageText === '/start') {
        let message = `Hello ${name} ${lastName}! Your username is @${username} and you wrote: ${messageText}`;
        bot.sendMessage(chatId, message, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Open web app', web_app: { url: 'https://poe.com/chat/1xizmcz8lya2n4vd3ip' } }]
                ]
            }
        });
    }
});
