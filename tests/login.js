module.exports = {
	'Login to Cummings': function (client) {
	client 
	.url('http://cummings.localhost')
	.waitForElementPresent('input[name=identity]', 1000)
	.setValue('input[name=identity]', 'username')
	.waitForElementPresent('input[name=credential]', 1000)
 	.setValue('input[name=credential]', 'password')
 	.click('button[name=submit]')
 	.waitForElementPresent('.dashboard', 10000)
	.url(function(result) {
		this.assert.equal(result.value,'http://cummings.localhost/#/leads');
	})
	.end();
	}
};