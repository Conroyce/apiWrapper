var FileApi = require('./fileWriter');
var myFs = new FileApi();
myFs.write('test.txt','test data');
myFs.append("test.txt"," I'm adding new Content!");
myFs.print("test.txt","utf-8");
myFs.write("test.txt",'new data',false);
myFs.write("test.txt","will override test data");