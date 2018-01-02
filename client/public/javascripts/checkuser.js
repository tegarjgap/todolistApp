$(document).ready(function(){
	$("#submit").click(function(){
		var user = $('#username').val();
		var pass = $('#password').val();
		var userdata = ("user=" + user + "&pass=" + pass);
		var status = 0;

		//check available or not
		checkData(userdata);

		//direct if available		
		if(Number(status) === 200){
			redirect(userdata);
		} else {
			alert('Invalid Username or Password!');
		}

		function checkData(userdata){
			$.ajax({
				async: false,
				type: 'POST',
				url: 'http://127.0.0.1:3000/checkuser',
				data: userdata,
				success: function(data){
					if( data == 200 ){
						
						status = data;
						
					} else {
						
						status = data;
						
					}
				},
				error: function(){
					alert('Server cannot response');
				}
			});
		}


		function redirect(userdata){
			$.ajax({
					type: 'POST',
					url: 'http://127.0.0.1:3001/profile',
					data: userdata,
					success: function(newData){
						console.log(userdata);
						
					},
					error: function(){
						alert('gagal kedua');
					}
			});
			window.location.replace("http://127.0.0.1:3001/profile");
		};

		
	})
})