function postJson(url, body, headers = {}) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    for (var name in headers) {
      xhr.setRequestHeader(name, headers[name]);
    }
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.response));
        } else {
          reject(this);
        }
      }
    };
    xhr.send(JSON.stringify(body));
  });
}

module.exports = postJson;
