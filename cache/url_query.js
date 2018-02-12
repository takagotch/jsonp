var xhr = getXMLHttpRequest();
xhr.onreadystatechange = function () {/**/}
xhr.open("get", "/path/to/content.js?_=" + (new Date()).getTime());
xhr.send();



