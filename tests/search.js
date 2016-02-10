module.exports = {

	before: function(client) {
		client.login()
	}, 

	'Redirect to Search Page': function (client) {
	client 
	.click('.search > a')
	.url(function(result) {
		this.assert.equal(result.value, client.launch_url + '/#/search');		
	})
	.end();
	}
};