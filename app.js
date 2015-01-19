var FileApi = require('./fileWriter');
var CryptApi = require('./encryption');

var myFs = new FileApi();
myFs.write('test.txt','test data');
myFs.append("test.txt"," I'm adding new Content!");
myFs.print("test.txt","utf-8");
// myFs.write("test.txt",'new data',false);
myFs.write("test.txt","will override test data");
myFs.copy("test.txt","test2.txt",function(err) { console.log(err); })


var crypto = new CryptApi();
var secret_key = "pipe";
var encrypted_data = crypto.encrypt("data",secret_key);
crypto.decrypt(encrypted_data, secret_key);