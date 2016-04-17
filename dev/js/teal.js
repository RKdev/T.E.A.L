function Teal() {
        this.model = new TEAL.model();
        this.controller = new TEAL.controller();
        this.templates = new TEAL.templates();
        this.view = new TEAL.view(this.templates);
    }

  var  teal = new Teal();
