const nodemailer = require("nodemailer");

var transfer = nodemailer.createTransport({
    service: "gmail", // Kullandığın Servis
    auth: {
        user: "***@gmail.com", // E Posta Adresin
        pass: "***" // Şifren
    }

});

var mail = {
    from: "***@gmail.com", // E Posta Adresin
    to: "---@gmail.com", // Alıcının E Posta Adresi
    subject: "NodeJS ile Mail", // Başlık
    text: "NodeJS ile mailimi gönderiyorum." // İçerik
    // html: "<h1>Örnek</h1>"
};

transfer.sendMail(mail, function(error){
    if(error) console.log(error);
    else console.log("Mailiniz Gönderildi!");
});
 