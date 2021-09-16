var CryptoJS = require("crypto-js");

var myArgs = process.argv.slice(2);
const SENHA_SECRETA = myArgs[0]

//Abrindo aquivo e lendo com FS
const fs = require('fs')
fs.readFile('./respostas.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  /**
   * Se o segundo argumento é encrypt então encripta o arquivo e mostra encriptado
   */
  if ("encrypt" == myArgs[1]) {
    const encrypText = CryptoJS.AES.encrypt(data, SENHA_SECRETA).toString();
    console.log(encrypText)
  /**
   * Senao o segundo argumento é decrypt e revela os dados do aquivo
   */
  } else {
    var bytes  = CryptoJS.AES.decrypt(data, SENHA_SECRETA);
    var reposta = bytes.toString(CryptoJS.enc.Utf8);
    //USANDO O FS para salavar o aquivo
    fs.writeFile('./respostas.js', reposta, (err) => {
        if (err) throw err;
        console.log("Veja o arquivo respostas.js ;)")
    });
  }
});

