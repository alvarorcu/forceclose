$(document).ready(function() {
	$("#send-form").click(function() {
		var name = $("#nombre").val();
		var email = $("#correo").val();
		var phone = $("#telefono").val();
		var app = "No";
		var web = "No";
		var control = "No";
		var message = $("#explicacion").val();
		var date  = $("#fecha").val();
		var time = $("#hora").val();
		if ( $("#aplicacion").is(':checked') ){
			app = "Sí";
		}
		if ( $("#desarrollo").is(':checked') ){
			web = "Sí";
		}
		if ( $("#control").is(':checked') ){
			control = "Sí";
		}
		$("#returnmessage").empty(); // To empty previous error/success message.
		// Checking for blank fields.
		if (name == '' || email == '' || phone == '' || contact == '' || date == '' || time == '') {
			alert("Por favor, llena los campos vacíos.");
		} 
		else if ( app == '' && web == '' &&  control == '' ) {
			alert("Por favor, elige el tipo de servicio que deseas.");
		}
		else {
		// Returns successful data submission message when the entered information is stored in database.
		$.post("../contact_form.php", {
		name1: name,
		email1: email,
		phone1: phone,
		app1: app,
		web1: web,
		control1: control,
		message1: message,
		date1: date,
		time1: time
		}, function(data) {
		$("#returnmessage").append(data); // Append returned message to message paragraph.
		if (data == "Tu correo ha sido enviado, nos estaremos contactando contigo pronto.") {
		$("#form")[0].reset(); // To reset form fields on success.
		}
		});
		}
	});
});