
var config = { };

// should end in /
config.rootUrl  = process.env.ROOT_URL                  || 'http://localhost:3000/';

config.facebook = {
    appId:          process.env.FACEBOOK_APPID          || '1924484857799858',
    appSecret:      process.env.FACEBOOK_APPSECRET      || 'bf2d3e73401f688abcbd0b8aec08e174',
    appNamespace:   process.env.FACEBOOK_APPNAMESPACE   || 'nodescrumptious',
    redirectUri:    process.env.FACEBOOK_REDIRECTURI    ||  config.rootUrl + 'login/callback'
};
// Right Token with expiration date on August
//config.user_access_token = 'EAAbWTwxTJLIBAE4g6cV7uiJW9A80z16Kwg7PAFKWVq4vjWX98MgTDlEFZBYdZB8SDzpJhqFyT8yCZCKt09wWRILbmH2ywMbmYzZA3zaFtrz6DIIfAeeQ0KjNbcIaN7vTdzHOpiPXwZBzZCcYSM3YCtql4tvgxjE5huFDbYWZCeSNgZDZD';


// Graph API token ;  this wil expire soon. so go to graph api explorer to get the token again
config.user_access_token = 'EAACEdEose0cBADDgSvDXbjzEBuZCIWqYQWPgr9ExexbMZBXRbve6lRZCL0bTX4FDs7ZB1aHU2bBsOhTua40ZA3Wdg4qST0NKTdyeTF5H6eDx0ojmTbIQzaJgj2X8dmxZB7Hwb89lxGWSTvPtsNfTZANrtPqNehuMwp74swTqjYd6IZCZAut0ZCpBPZCaOndVu0mkJsZD';

module.exports = config;
