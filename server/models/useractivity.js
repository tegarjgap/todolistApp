const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var activitySchema = new Schema({
	task: {
		type: String,
		require: true,
		trim: true,
		unique: true
	},
	date: {
		type: Date
	}
});


const useractivity = mongoose.model('useractivity', activitySchema);
// const UserActivity = mongoose.model('UserActivity', activitySchema);

module.exports = useractivity;