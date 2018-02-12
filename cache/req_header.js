//If-Modified-Since
var xhr = getXMLHttpRequest();
xhr.onreadystatechange = function(){/**/}

xhr.open("get", "/path/to/content.js");

xhr.setRequestHeader("If-Modified-Since", "Thu, 01,Jun 2018 00:00:00 GMT");
xhr.send();

