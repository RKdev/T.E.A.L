//remember to remove logging before prod!

(function(window){

    function Store(){
        this.hello = "world";
        this.categories_db = '/dev/pretendDB/categories.json';
        this.topics_db = '/dev/pretendDB/topics.json';
        this.resources_db = '/dev/pretendDB/resources.json';
    }



//store needs to pass a local "utility" callback to requestAJAX, followed by the program's callback
Store.prototype.requestAJAX = function(params) {
    //parameters
    //db : for now, abs path to db
    //requestType : 'GET' or 'POST'
    //POSTdata : data to send to server
    //callback: function to run on request load

    //console.log(params);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
          //console.log('teal.store.requestAJAX: ' + xhr.readyState);
    };

    xhr.open(params.requestType, params.db, true);
    xhr.addEventListener("load", function(){
      //remove logging before prod
      console.log('teal.store.requestAJAX:\n\n' + xhr.responseText);

      //remove logging before prod
      console.log(params.callback());
    });

    xhr.send(params.POSTdata);
};
//these should be moved to model

Store.prototype.readFile = function(file_db) {
    //generate a list of all a files contents
    this.requestAJAX({db:file_db, requestType:'GET', callback:Math.random});
};

//create
//read
//update
//destroy


window.TEALClass = window.TEALClass || {};
window.TEALClass.store = Store;
})(window);
