var fs = require('fs');

module.exports = function() {
  this.write = function(name,data,boo) {
    var ans;
    if (boo === false) {
      var ran = Math.random()*1000;
      ans = fs.writeFileSync(name+"_"+ran,data);
    } else {
      ans = fs.writeFileSync(name,data);
    } 
    return ans; 
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