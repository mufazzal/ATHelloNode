const newman = require('newman');
var args = process.argv.slice(2);
const host = args[0]
const port = args[1]
 
const envVar = [{
        "key": "HOST",
        "value": host,
        "enabled": true
    }, {
        "key": "port",
        "value": port,
        "enabled": true
    }];
const rr = newman.run({
    collection: './HelloNodeATTest.json',
    environment: './HelloNodeATTest.env.json',
    reporters: ['cli', 'htmlextra'],
    envVar: envVar,
    iterationCount: 1,
    reporter: {
        htmlextra: {
            title: "HelloNodeTestResult",
            showEnvironmentData: "true",
            showMarkdownLinks: true
        }
    }
}, function (err, summary) {
    if (err) { throw err; }
    if(summary.run.failures.length > 0) {
        throw `There are ${summary.run.failures.length} tests failed`
    }
});