var FileApi = require('./fileWriter');
var CryptApi = require('./encryption');

var myFs = new FileApi();
myFs.write('test.txt','test data');
myFs.append("test.txt"," I'm adding new Content!");
myFs.print("test.txt","utf-8");
// myFs.write("test.txt",'new data',false);
myFs.write("test.txt","will override test data");

var crypto = new CryptApi();
var secret_key = "pipe";
crypto.encrypt("data",secret_key);