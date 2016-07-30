(function() {

    var ALL_PRODUCTS = [];
    var DEFAULT_URL = "http://localhost:3050/api/v1";
   
   function getProducts(params, callback) {
  
        var request = new XMLHttpRequest();
        var data, error , body;

        request.open(params.method, DEFAULT_URL + params.url, params.async);
        request.onload = function () {
            if (request.status == 200 || request.status == 304 || request.status == 201 ) {
                data = JSON.parse(request.responseText);
                callback(null, data);
            } else {
                error = request.statusText;
                callback(error, null);
            }
        };

        request.onerror = function (data) {
            callback(data, null);
        };

        request.send(body);
    }

    function renderProducts(){

        var params = {
            method: "GET",
            url: "/goods",
            async: true,
            dataType: "json"
        };
       
        getProducts(params, function (error, data) {
            var goodsHolder = document.createElement("div");

            ALL_PRODUCTS = data;
            console.log(data);
        })
        


    }



}()