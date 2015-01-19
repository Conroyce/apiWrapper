var crypto = require('crypto');

module.exports = function() {
  this.encrypt = function(data,key) {
    var cipher = crypto.createCipher('aes-128-cbc',key);
    var crypted = cipher.update(data,'utf-8','hex')
    crypted += cipher.final('hex');
    console.log(crypted);
  };
};