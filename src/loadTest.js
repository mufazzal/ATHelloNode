const loadtest = require('loadtest');
var args = process.argv.slice(2);
const host = args[0]

const options = {
	url: `http://${host}/loadTest/20`,
//	url: 'http://127.0.0.1:3010/loadTest/10',
	maxRequests: 50,
    concurrency: 10,
    method: "GET",
    rps: 10,
    debug: true
};
loadtest.loadTest(options, function(error, result)
{
	if (error) {
		return console.error('Got an error: %s', error);
	}
    else {
        console.log(result)
    }
	console.log('Tests run successfully');
});
