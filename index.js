const fs = require('fs');
const qrcode = require('qrcode-terminal');
const { Client,MessageMedia  } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
const phoneNumbers = [
    '91number@s.whatsapp.net',
    'number@s.whatsapp.net',
  ];
 
client.on('ready', async () => {
    console.log('Client is ready!');
    const attachmentPdf = MessageMedia.fromFilePath("./sample.pdf");
    const messageText = "Hello, please find the attached PDF file.";
    
  
      for (const phoneNumber of phoneNumbers) {
        await client.sendMessage(phoneNumber,attachmentPdf);
        await client.sendMessage(phoneNumber,messageText);
        console.log(`Message sent to ${phoneNumber}`);
      }
});

client.initialize();

