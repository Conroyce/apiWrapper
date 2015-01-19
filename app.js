var FileApi = require('./fileWriter');
var myFs = new FileApi();
myFs.write('test.txt','test data');
myFs.append("test.txt"," I'm adding new Content!");