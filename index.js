const TelegramBot = require('node-telegram-bot-api');
const token = '483469020:AAG5_C_E7lsavSJFkTbOfrHepHnPgvdz1GM';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {

  if (msg.text.toString().toLowerCase().includes('sample text')) {
    bot.sendMessage(msg.chat.id,"This is sample message");
  } else if(msg.text.toString().toLowerCase().includes('second sample')) {
    bot.sendMessage(msg.chat.id, "This is second sample message!");
  } else if(msg.text.toString().toLowerCase().includes('keyboard')) {
    bot.sendMessage(msg.chat.id, "Key board is the key");
  } else {
    bot.sendMessage(msg.chat.id, "Nice Robot! Are you real steel?");
  }
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
      "keyboard": [["Sample text", "Second sample" , "Keyboard"],
        ["Keyboard", "Second sample", "I'm robot"], ["I'm robot", "Keyboard", "Sample text"]]
    }
  });
});

