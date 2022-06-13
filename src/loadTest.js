const loadtest = require('loadtest');
const options = {
	url: 'http://127.0.0.1:3010/loadTest/10',
	maxRequests: 10000,
    concurrency: 5,
    method: "GET",
    rps: 100,
    debug: true,
    timelimit: 10
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
