      function Record(name){
        this.name = name;
        this.date = Date.now();
        this.random = Math.round(Math.random() * 1000);
        this.id = "" + this.date  + this.random;
      }

      Record.prototype.setProperty = function (key, value) {
        this[key] = value;
      };
