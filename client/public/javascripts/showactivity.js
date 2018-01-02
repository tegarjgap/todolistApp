$(function (){
	$.ajax({
	    type: "GET",
	    url: "http://127.0.0.1:3000/useractivity",
	    success: function(data){
	    	console.log(data[0].task);
	    	console.log(data.length);
	    	var i = 0;
	    	while(i < data.length){
	    		$("#addLists").append('<li> ' + data[i].task + ' ' + data[i].date);
	    		i++;
	    	}
	    },
	    error: function(){
	    	alert('ada yang salah.');
	    }
	});

});

$(document).ready(function(){
	
	$('#add').click(function(){
		var task = $('#task').val();
		var date = $('#date').val();
		var userdata = ("todo=" + task + "&tanggal=" + date);
		$.ajax({
			type: 'POST',
			url: 'http://127.0.0.1:3000/tambahlist',
			data: userdata,
			success: function(data){
				$("#addLists").append('<li> ' + task + ' ' + date); 
			},
			error: function(){
				alert('Failed, server cannot connect');
			}
		})
	})
})