      function Record(name){
        this.name = name;
        this.date = Date.now();
      }

      Record.prototype.book = function(name) {
        this.id = '';
        this.type = 'hierarchy';
        this.parent = teal.model.UIContext;
        this.child = '';
        return('record.book');
      };

      Record.prototype.setProperty = function (key, value) {
        this[key] = value;
      };
