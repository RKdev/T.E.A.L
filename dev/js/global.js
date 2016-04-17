(function(window){

    //Get element by id
    window.geid = function(elem_id){
        return document.getElementById(elem_id);
    };

    //Get element by selector
    window.qs = function(selector) {
        return document.querySelector(selector);
    };
})(window);
