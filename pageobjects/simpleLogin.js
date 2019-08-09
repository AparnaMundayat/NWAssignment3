module.exports = {
    url: function()
    {
        return this.api.launchUrl; 
	},
	elements: {
		username: {
			selector: 'input[name=user_name]'
		},
		password: {
			selector: 'input[name=password]'
		},
		login: {
			selector: 'input[type=submit]'
		},
		error: {
			selector: '#errormessage'
		}
	}
};
    