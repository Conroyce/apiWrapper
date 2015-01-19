var fs = require('fs');

module.exports = function() {
  this.write = function(name,data,boo) {
    if (boo === false) {
      var ran = Math.random()*1000;
      return fs.writeFile(name+"_"+ran,data,function(err) {
        if (err) throw err;
        console.log("It's saved!");
      });
    } else {
      return fs.writeFile(name,data,function(err) {
        if (err) throw err;
        console.log("It's saved!");
      });
    }  
  };

  this.append = function(name,data) {
    return fs.appendFile(name,data,function(err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  };

  this.print = function(file,opt) {
    return fs.readFile(file,opt,function(err,data) {
      if(err) throw err;
      console.log(data);
    });
  };

};