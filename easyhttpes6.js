class EasyHTTP {
  // make an http get request
  get(url) {

    return new Promise((resolve, reject) => {      
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));    
    });
  }

  // make an http post request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
  }

  // make an http PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    }); 
  }

  // make an http delete request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(() => resolve('Data deleted. . .'))
        .catch(err => reject(err));
    });
  }
}


























function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an http GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error:' + self.http.status);
    }
  }

  this.http.send();
}

// Make an http POST Request
easyHTTP.prototype.post =  function(url, data, callback) {
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }
  
  this.http.send(JSON.stringify(data));
}

// Make an http PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);    
  }

  this.http.send(JSON.stringify(data));
}

// Make an http DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self =  this;
  this.http.onload = function() {
    if(self.http.status = 200) {
      callback(null, 'Post deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}