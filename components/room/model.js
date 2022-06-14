const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
 	name: {
		type: String,
		required: true,
	}, 
	users: [
		{
			type: Schema.ObjectId,
			ref: 'User',
		},
	],
	date: {
		type: Date,
		default: new Date(),
	},
});

const model = mongoose.model('Room', roomSchema);

module.exports = model;
