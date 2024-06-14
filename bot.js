const venom = require('venom-bot');
const puppeteer = require('puppeteer');

venom
  .create(
    'session-name', //name of session
    undefined, //catchQR
    undefined, //statusFind
    {
      headless: true, // Headless browser mode
      executablePath: puppeteer.executablePath(), // Use the correct executable path for Chrome
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
  )
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}
