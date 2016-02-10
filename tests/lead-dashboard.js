module.exports = {

	before: function(client) {
		client.login()
	}, 

	'Redirect to Lead Dashboard after successfull login': function (client) {
	client 
	.assert.title('Cummings Properties LLC')
	.waitForElementPresent('.dashboard', 5000)
	.url(function(result) {
		this.assert.equal(result.value,'http://cummings.localhost/#/leads');
	})
	.end();
	}
};