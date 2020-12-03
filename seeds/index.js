module.exports = () => {
	const clientsSeed = require('./clientsSeed.js');

	Promise.all([
		clientsSeed
	])
		.then((dataArr) => { console.log('...All seeds inserted into collections succesfully!') });
}
