const mongoose = require(`mongoose`)

const articleSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
})

const Article = (module.exports = mongoose.model(`Article`, articleSchema)) // eslint-disable-line no-unused-vars
