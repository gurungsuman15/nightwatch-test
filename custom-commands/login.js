exports.command = function(callback) {


	var self = this;
	var data = self.globals;
	this
	.url('http://cummings.localhost')
	.waitForElementPresent('input[name=identity]', 1000)
	.setValue('input[name=identity]', data.identity)
	.waitForElementPresent('input[name=credential]', 1000)
 	.setValue('input[name=credential]', data.credential)
 	.submitForm('.login-box form', function(self){
 		this.assert.urlEquals(this.launch_url + '/#/leads');
 		this.getLogTypes(function(){
 			console.log("Successful Login");
 		})
 	})
 	

 	// .click('button[name=submit]')
 	if( typeof callback === "function"){
        callback.call(self);
    }
    return this;
};