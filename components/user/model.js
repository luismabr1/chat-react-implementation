const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	chats: [
		{
			type: Schema.ObjectId,
			ref: 'User',
		},
	],
/* 	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},*/
	dateOfCreation: Date,
});

const model = mongoose.model('User', userSchema);

module.exports = model;
