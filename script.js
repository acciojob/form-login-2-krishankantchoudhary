//your JS code here. If required.
function handleSubmit(event){
	event.preventDefault();

	//get form data
	const firstname=document.forms["infoform"]["First Name"].value;
	const lastname=document.forms["infoform"]["Last Name"].value;
	const phone=document.forms["infoform"]["Phone Number"].value;
	const email=document.forms["infoform"]["Email ID"].value;

	const message=
		"First Name: "+firstname+ "\n" +
		"Last Name: "+lastname+"\n"+
		"Phone Number: "+phone+"\n"+
		"Email ID: "+email+"\n";

	alert(message);






	
}