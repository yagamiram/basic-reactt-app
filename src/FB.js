// state, lifecycle and ui
var React = require('react');
var api = require('./utils/api');
var buttonStyle = {
  margin: '10px 10px 10px 0'
};
class FB extends React.Component {
  constructor (props) {
    super();
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
  }

  updateLanguage() {
    api.logToFB()
      .then(function (response) {
        // this.setState(function () {
        //   return {
        //     repos: response
        //   }
        // })
        console.log(response)
      }.bind(this))
  }

  render() {
    return (
      <div>
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={()=>window.location.href="http://localhost:3030/login/facebook"}>Login to Facebook</button>
        <h2>Welcome to React From FB</h2>
      </div>
    )
  }
}

module.exports = FB;
