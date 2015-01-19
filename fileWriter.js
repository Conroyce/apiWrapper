var fs = require('fs');

module.exports = function() {
  this.write = function(name,data,boo) {
    if (boo === false) {
      var ran = Math.random()*1000;
      return fs.writeFileSync(name+"_"+ran,data);
    } else {
      return fs.writeFileSync(name,data);
    }  
  };

  this.append = function(name,data) {
    return fs.appendFileSync(name,data);
  };

  this.print = function(file,opt) {
    return fs.readFile(file,opt,function(err,data) {
      if(err) throw err;
      console.log(data);
    });
  };

};