function validation() {
	var a = document.myform.age.value;
	var p1 = document.myform.pswrd.value;
	var p2 = document.myform.rpswrd.value;
	if (a < 18) {
		alert("You must be an ADULT to create an account");
		return false;
	}

	if (p1.length < 6 || ) {
		alert("enter a strong password with length more than 6 charecters!")
		return false;
	}
}