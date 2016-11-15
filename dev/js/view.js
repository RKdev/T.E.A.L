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

        //populate divs {} with div panel ids
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

//this is really a special case - it should be generalized further
// or kept the same, and have controller logic build template data
View.prototype.renderPanel = function(divRef, templateRef, data){
    //search the divs object for the name of the div to modify
    var searchDiv;
    if ((searchDiv = this.findDiv(divRef)) !== false){
      el = geid(this.divs[searchDiv]);
      el.innerHTML = ''; //wipe
      el.innerHTML = this.templates.display(templateRef, data); //load
    }
    else {console.log('teal.view.renderPanel: div not found');}
    return("teal.view.renderPanel");
};

View.prototype.addTemplateToPanel = function(divRef, templateRef, data) {
  var searchDiv;
  var html;
  if ((searchDiv = this.findDiv(divRef)) !== false){
    el = geid(this.divs[searchDiv]);
    html = el.innerHTML;
    html = html + this.templates.display(templateRef, data);
    el.innerHTML = ''; //wipe
    el.innerHTML = html; //load
  }
  else {console.log('teal.view.addTemplateToPanel: div not found');}
  return("teal.view.addTemplateToPanel");
};

window.TEALClass = window.TEALClass || {};
window.TEALClass.view = View;
})(window);
