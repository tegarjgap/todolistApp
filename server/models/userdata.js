const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {
		type: String,
		require: true,
		unique: true
	},
	password: {
		type: String,
		require: true
	}
});


const userdata = mongoose.model('userdata', userSchema);
// const UserActivity = mongoose.model('UserActivity', activitySchema);

module.exports = userdata;