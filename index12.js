const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
 
//const myChats = ["Test Automation", "Chetan", "Mayur Moto"]; // Add a list of contact names or group names here

/*const client = new Client({
  authStrategy: new LocalAuth(),
});*/
const client = new client();
 
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});
const phoneNumbers = [
  '918379080123@s.whatsapp.net',
  '918379080124@s.whatsapp.net',
];
client.on("ready", async () => {
  console.log("Client is ready!");

 
  
  const attachmentPdf = MessageMedia.fromFilePath("./sample.pdf");
  const messageText = "Hello, please find the attached PDF file.";
  

    for (const phoneNumber of phoneNumbers) {
      await client.sendMessage(phoneNumber,attachmentPdf);
      await client.sendMessage(phoneNumber,messageText);
      console.log(`Message sent to ${phoneNumber}`);
    }
 // client.sendMessage('918379080123@s.whatsapp.net','Random bot test');
 /* client.getChats().then((chats) => {
    myChats.forEach((chatName) => {
      const myChat = chats.find((chat) => chat.name === chatName);
      if(myChat){
        const attachmentPdf = MessageMedia.fromFilePath("./sample.pdf");
        client.sendMessage(myChat.id._serialized, attachmentPdf); 
      }
      else {
        console.log(`Chat ${chatName} not found`);
      }
    });
  });*/
});
 
client.initialize();
