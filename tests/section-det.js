module.exports = {
    'TC5:section':function (browser) {
       
        
        var login = browser.page.sectionJS();

        login.navigate()

        login.expect.section('@logininput').to.be.visible;

        var logininputsection=login.section.logininput;
        logininputsection.expect.element('@username').to.be.visible;
        logininputsection.expect.element('@password').to.be.visible;
           
        browser.end();
    }

};

        