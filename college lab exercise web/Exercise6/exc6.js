


 function factorial(){
 	var f,i,n;
f=1;

	 n = document.getElementByid("text1").value;

	 for (var i = 1; i <=n; i++) {
	 	
	 	f =f*i;
	 	}
	 	document.getElementByid("fac1").value = f;

}