  (function(window){

    function View(templates){
        this.templates = templates;

        //get a list of page elements using  getLayout method
        this.divs = {};
}

View.prototype.getLayout = function() {
        //this will eventually take a "layoutconfig.json" argument and provide the layout
        // for the html or present a default option if no config is passed
        // for now retrieves div list from document
        var divs = qsa('div');

        //populate panels {} with div panel ids
        for (var i = 0; i < divs.length; i++){
              var divName = 'div_' + (i + 1).toString();
              this.divs[divName] = divs[i].id;
        }
        console.log(this.divs);
        return("getLayout");
};

View.prototype.findDiv = function(divValue) {
  //search for div key by value
  for(var key in this.divs) {
  //found it
    if(this.divs[key] === divValue) { return(key.toString()); }
  }
  //didn't find it
  return(false);
};


View.prototype.renderPanel = function(panelRef, templateRef, data){
    //search the divs object for the name of the div to modify
    var searchDiv;
    if ((searchDiv = this.findDiv(panelRef)) !== false){
      el = geid(this.divs[searchDiv]);
      el.innerHTML = ''; //wipe
      el.innerHTML = this.templates.display(templateRef, data); //load
    }
    else {console.log('teal.view.renderPanel: div not found');}
    return("renderPanel");
};

window.TEALClass = window.TEALClass || {};
window.TEALClass.view = View;
})(window);
