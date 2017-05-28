
module.exports.config = {
    specs: ['spec.js'],
    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    /*capabilities: {
        browserName: 'firefox'
    }*/
    onPrepare: () => {
        // Adding nice console output. 
        // Provided by: https://github.com/razvanz/jasmine2-reporter
        let ConsoleReporter = require('jasmine2-reporter').Jasmine2Reporter
        jasmine.getEnv().addReporter(new ConsoleReporter())

        // Adding reporting that is applicable for Jenkins or other CI tool
        // Provided by: https://github.com/larrymyers/jasmine-reporters
        let JUnitXmlReporter = require('jasmine-reporters').JUnitXmlReporter
        let junit_reporter_options = {
            savePath: '../test_results/',
            consolidateAll: true
        }
        jasmine.getEnv().addReporter(new JUnitXmlReporter(junit_reporter_options))
    }
}