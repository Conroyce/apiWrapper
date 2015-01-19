var crypto = require('crypto');

module.exports = function() {
  this.encrypt = function(data,key) {
    var cipher = crypto.createCipher('aes-128-cbc',key);
    var crypted = cipher.update(data,'utf-8','hex')
    crypted += cipher.final('hex');

    console.log(crypted);
    return crypted;
  };
  this.decrypt = function(data,key) {
    var decipher = crypto.createDecipher('aes-128-cbc', key);
    var decrypted = decipher.update(data, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');

    console.log(decrypted);
    return decrypted;
  }
};