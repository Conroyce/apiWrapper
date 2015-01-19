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
      console.log(data + ' was appended to file!');
    });
  };

  this.print = function(file,opt) {
    return fs.readFile(file,opt,function(err,data) {
      if(err) throw err;
      console.log(data);
    });
  };

  this.copy = function(source, target, cb) {
    var cbCalled = false;

    var rd = fs.createReadStream(source);
    rd.on("error", function(err) {
      done(err);
    });
    var wr = fs.createWriteStream(target);
    wr.on("error", function(err) {
      done(err);
    });
    wr.on("close", function(ex) {
      done();
    });
    rd.pipe(wr);

    var done = function(err) {
      if (!cbCalled) {
        cb(err);
        cbCalled = true;
      }
    };
  };

  this.move = function(source,target) {
    fs.rename(source,target,function(err) {
      if (err) throw err;

      fs.stat(target, function (err,stats) {
        if (err) throw err;
        console.log('stats: ' + JSON.stringify(stats));
      });
    })
  };
};























