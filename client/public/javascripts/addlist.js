$(function (){
	$('#addList').on('click', function() {
		var task = $('#task').val();
		var date = $('#date').val();
		var userdata = ("todo=" + task + "&tanggal=" + date);

		$.ajax({
			type: 'POST',
			url: 'http://127.0.0.1:3000/tambahlist',
			data: userdata,
			success: function(data){
				console.log(userdata);
				alert(data);
			},
			error: function(){
				alert('Failed, server cannot connect');
			}
		});
	}

});


