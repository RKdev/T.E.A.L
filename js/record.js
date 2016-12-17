      function Record(name){
        this.name = name;
        this.date = Date.now();
        this.id = "" + this.date + Math.round(Math.random() * 1000);
        this.cycle = 0;
      }

      Record.prototype.setProperty = function (key, value) {
        this[key] = value;
      };

      Record.prototype.addNote = function (data) {
        this.data = data;
      };
