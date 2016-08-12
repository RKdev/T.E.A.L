function View(templates){
    this.templates = templates;

    //get a list of page elements using  getLayout method
    this.panels = {};
    this.buttons = {};
}

var inputs = qsa('input');
var buttons = [];

//populate buttons {} with button names
 var j = 1;
 for ( i = 0; i < inputs.length; i++) {
    var buttonName = '';
    if(inputs[i].type === 'button'){
        buttonName = 'button_' + (j++).toString();
        this.buttons[buttonName] = inputs[i].value;
    }
}

View.prototype.getElementFromLayout = function(identifier, value) {
    if (identifier === 'button'){
        for(var i = 0; i < this.buttons.length; i++) {
            console.log(i);
        }
    }
};

View.prototype.addElementToPanel = function(panelRef, element, data){
  var panel = this.panels[panelRef].innerHTML;
  this.panels[panelRef].innerHTML = panel + this.templates.addElement(element, data)
};

Templates.prototype.addElement = function(element, data){
  var returnElement = this.elements[element];

  //put data in element template

  return returnElement;
};
