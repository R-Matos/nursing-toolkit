const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shiftpatternSchema = new Schema({
	uuid: {
		type:String,
		max:45,
		unique: true,
		required: true
	},

	timeOfDay: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		maxLength: 5,
		minlength: 3
	},

	startTime: {
		type: String,
		required: true,
		trim: true,
		maxLength: 5,
		minlength: 5
	},

	endTime: {
		type: String,
		required: true,
		trim: true,
		maxLength: 5,
		minlength: 5
	},
}, {
	timestamps: true,
});


const shiftPattern = mongoose.model('ShiftPattern', shiftpatternSchema);

module.exports = shiftPattern;

