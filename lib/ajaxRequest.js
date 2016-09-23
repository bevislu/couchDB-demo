function ajaxRequest(method, url, params) {
    if (method.toUpperCase() === 'GET') {
        url += url.indexOf('?') >= 0 ? '&nocache=' : '?nocache=';
        url += (new Date()).getTime();
    }
    
    return new Promise(function(resolve, reject) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open(method, url, true);
        
        var contentType = 'application/x-www-form-urlencoded; charset=utf-8';
        if (["POST", "PUT", "DELETE"].indexOf(method) > -1) {
            contentType = 'application/json';
        }
        xmlhttp.setRequestHeader("Accept", 'application/json');
        xmlhttp.setRequestHeader("Content-Type", contentType);
        
        xmlhttp.onreadystatechange = function onreadystatechange() {
            var response;
            if (xmlhttp.responseText !== "") {
                try {
                    response = JSON.parse(xmlhttp.responseText);
                } catch (e) {
                    response = null;
                }
            }
            
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if ([200, 201, 204].indexOf(xmlhttp.status) > -1) {
                    resolve(response);
                } else {
                    reject(response);
                }
            }
        };
        
        params = params || {};
        var requestBody = (typeof params === 'string') ? params : toQueryString(params);
        
        xmlhttp.send(requestBody);
    });
    
    function toQueryString(object) {
        var queryString = [];

        Object.keys(object).forEach(function(key){
            queryString.push(key + '=' + encodeURIComponent(object[key]));
        });

        return queryString.join('&');
    }
}