var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	task: {
		type: String,
		required: true,
		trim: true
	},
	date: {
		type: String,
		required: true
	},
	status: {
		type: Boolean
	},
	taskId: {
		type: Number
	}
});


const ToDo = mongoose.model('userKegiatan', todoSchema);
module.exports = ToDo;