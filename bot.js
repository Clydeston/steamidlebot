const config = require("./config.json");
var Steam = require('steam');
var SteamUser = require('steam-user');

var client = new SteamUser();
//815780

var logOnOptions = {
	accountName: config.username,
	password: config.password
};

console.log("logging on!");
client.logOn(logOnOptions);

client.on('loggedOn', () => {
	console.log('Successfully logged in!');

	client.setPersona(SteamUser.EPersonaState.Online);   
    client.gamesPlayed([815780]); 
    console.log('Now idling selected games!');    

});
