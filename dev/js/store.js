(function(window){

    function Store(){
        this.hello = "world";
        this.categories_db = '/dev/pretendDB/categories.json';
    }


//store needs to pass a local "utility" callback to requestAJAX, followed by the program's callback
Store.prototype.requestAJAX = function(params) {
    //parameters
    //db : for now, abs path to db
    //requestType : 'GET' or 'POST'
    //POSTdata : data to send to server
    //callback: function to run on request load

    console.log(params);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
          console.log('teal.store.requestAJAX: ' + xhr.readyState);
    };

    xhr.open(params.requestType, params.db, true);
    xhr.addEventListener("load", function(){
      console.log('teal.store.requestAJAX:\n\n' + xhr.responseText);

      //remove logging from callback before prod
      console.log(params.callback());
    });

    xhr.send(params.POSTdata);
};

Store.prototype.listCategories = function () {
    //generate a list of all defined categories
    this.requestAJAX({db:this.categories_db, requestType:'GET', callback:Math.random});
};

Store.prototype.listTopicsByCategory = function (category, callback) {
    //generate a list of all topics within a category
    //pass that list to a callback function
};

Store.prototype.listResourcesByTopic = function (topic, callback) {
    //generate a list of all resources withing a topic
    //pass that list to a callback function
};

window.TEALClass = window.TEALClass || {};
window.TEALClass.store = Store;
})(window);
