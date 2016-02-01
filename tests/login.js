module.exports = {
	'Login to Cummings Properties': function (client) {
	var data = client.globals;
	client 
	.url('http://cummings.localhost')
	.getLogTypes(function(){
		console.log(data.credential);
	})
	.assert.title('Cummings Properties LLC')
	.setValue('input[name=identity]', data.identity)
	.setValue('input[name=credential]', data.credential)
	.click('button[name=submit]')
	.waitForElementVisible('.search',100000)
	.url(function(result) {
		this.assert.equal(result.value,'http://cummings.localhost/#/leads');
	})
	.click('.search > a')
	.url(function(result) {
		this.assert.equal(result.value, 'http://cummings.localhost/#/search');		
	})
	.waitForElementVisible('.addnew', 1000)
	.click('.addnew > a')
	.url(function(result) {
		this.assert.equal(result.value, 'http://cummings.localhost/#/add-lead');		
	})
	.end();
	}
};
