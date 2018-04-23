
function validation()
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(username == "")
	{
		alert("Enter the username");
	}

	else if(password == "")
	{
		alert("Enter the Password");
	}
}