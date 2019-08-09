module.exports = {

    before: function(){
console.log("starting suite");
    },

    'TC1: salesforce Login Page using Expect API(BDD)':function (client) {
        client
        .url('https://login.salesforce.com/?locale=in');
        client.pause(1000);
//element to be present in 1000ms
        client.expect.element('body').to.be.present.before(1000);
        //expect element <body> to to have css property display
        client.expect.element('body').to.have.css('display');
        //expect element <#username> to be an input tag
        client.expect.element('#username').to.be.an('input');
         //expect element <#username> to be visible
        client.expect.element('#username').to.be.visible;
        client.end();
    },
    beforeEach: function(){
        console.log("starting test");
            },
    'TC2: server Login Page using Expect API(BDD)':function (client) {

        var login = client.page.simpleLogin();

        login.navigate()

        login.pause(1000);
        login.expect.element('body').to.be.present.before(1000);
        login.expect.element('@username').to.be.visible;
        login.setValue("input[name='user_name']", 'aparnaM')
        login.expect.element('@password').to.be.an('input');
        login.setValue('@password', 'aparnaM');
        login.click('@login');
        login.expect.element('@error').text.to.contain('User name or password is not correct.') ;   
    
       // client.expect.element('@login', 'Login').to.be.visible;
      //  client.expect.element('@error').to.be.not.present();

      login.end();
    },
    afterEach: function(){
        console.log("stopping test");
            },
    after: function(){
        console.log("stopping suite");
            } 
};

      