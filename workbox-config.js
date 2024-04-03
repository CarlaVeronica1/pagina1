module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpeg,jpg,png,css,js,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};