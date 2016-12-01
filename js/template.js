/*jshint laxbreak:true*/
(function(window){

function Templates() {
    this.list = {
        dataPanel :
              '<div id=data_panel_header><header><h2>{{Title}}</h2></header></div>'
            + '<hr/>'
            + '<div id=data_panel_output></div>',

        controlPanel :
              '<div id=control_panel_header><header><h2>{{Title}}</h2></header></div>'
            + '<hr/>'
            + '<div id="control_panel_features">'
            + '<input id="load" type="button" class="button" value="{{Controlbutton}}">'
            + '<input id="topload" type="button" class="button" value="{{Topicsbutton}}">'
            + '<input id="resload" type="button" class="button" value="{{Resourcesbutton}}">'
            + '<br/>'
            + '<br/>'
            + '<input id="input_box" type="text">'
            + '<input id="add" type="button" class="button" value="Add">'
          //  + '<input id="delete" type="button" class="button" value="Delete">'
            + '<hr/>'
            + '<input id="drop" type="button" class="button" value="Drop All Data">'
            + '</div>',

        button : '<input id="{{id}}" type="button" class="button" value="{{buttonname}}">',

        header : '<header><h2>{{Title}}</h2></header>'
    };
}

Templates.prototype.display = function(template, data){
    var view = '';
    var returnTemplate = this.list[template];

    //put data in template
    for(var key in data ){
        //replace template item with data[key]
        //template item must match data object key name
        returnTemplate = returnTemplate.replace('{{' + key + '}}', data[key]);
    }

    //return template
    view = view + returnTemplate;
    return view;

};

window.TEALClass  = window.TEALClass || {};
window.TEALClass.templates = Templates;
})(window);
