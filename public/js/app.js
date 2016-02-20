var socket = io();

socket.on('connect', function(){
	console.log("Sucessfully connected to server");
});