module.exports = {

	before: function(client) {
		client.login();
	}, 

	'Redirect to Add New Lead Page': function (client) {
		client
		.click('.addnew > a')
		.url(function(result) {
			this.assert.equal(result.value, client.launch_url + '/#/add-lead');		
		})
		.end();
	}
};
