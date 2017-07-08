var axios = require('axios');

module.exports = {
  fetchPopularRepos: function (language) {
    var encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');
    //var encodeURI = window.encodeURI('http://localhost:8888/homeValue?zipcode=94704&sqtFoot=2000');

  return axios.get(encodeURI).then(function (response) {
    // this funtion will get executed when the get(encodeURI) function is done
    return response; //json keys data.items [i think so]
  })
  }
}

module.exports = {
  logToFB: function (language) {
    var encodeURI = window.encodeURI('http://localhost:3030/');
    //var encodeURI = window.encodeURI('http://localhost:8888/homeValue?zipcode=94704&sqtFoot=2000');

  return axios.get(encodeURI).then(function (response) {
    // this funtion will get executed when the get(encodeURI) function is done
    return response; //json keys data.items [i think so]
  })
  }
}
