// module.exports = {
// 	'Login to Cummings Properties': function (client) {
// 	client 
// 	.url('http://cummings.localhost')
// 	.getLogTypes(function(){
// 		console.log(data.credential);
// 	})
// 	.assert.title('Cummings Properties LLC')
// 	.setValue('input[name=identity]', "")
// 	.setValue('input[name=credential]', data.credential)
// 	.click('button[name=submit]')
// 	.waitForElementVisible('.search',100000)
// 	.url(function(result) {
// 		this.assert.equal(result.value,'http://cummings.localhost/#/leads');
// 	})
// 	.click('.search > a')
// 	.url(function(result) {
// 		this.assert.equal(result.value, 'http://cummings.localhost/#/search');		
// 	})
// 	.waitForElementVisible('.addnew', 1000)
// 	.click('.addnew > a')
// 	.url(function(result) {
// 		this.assert.equal(result.value, 'http://cummings.localhost/#/add-lead');		
// 	})
// 	.end();
// 	}
// };


module.exports = {
	'Login to Cummings Properties': function (client) {
	client
	.url('https://qa.cummings.properties')
	.assert.title('Cummings Properties LLC')
	.setValue('input[name=identity]','crg_import')
	.setValue('input[name=credential]','test123')
	.click('button[name=submit]')
	.waitForElementVisible('.search',10000)
	.url(function(result) {
		this.assert.equal(result.value,'https://qa.cummings.properties/#/leads');
	})
	// .click('.search > a')
	// .url(function(result) {
	// 	this.assert.equal(result.value, 'https://qa.cummings.properties/#/search');
	// })
	// .waitForElementVisible('.addnew', 1000)
	// .click('.addnew > a')
	// .url(function(result) {
	// 	this.assert.equal(result.value, 'https://qa.cummings.properties/#/add-lead');
	// })
	.end();
	}
};
