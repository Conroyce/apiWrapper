var fs = require('fs');

module.exports = function() {
  this.write = function(name,data) {
    return fs.writeFileSync(name,data);
  };
  this.append = function(name,data) {
    return fs.appendFileSync(name,data);
  };
};