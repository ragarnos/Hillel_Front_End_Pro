random_int = Math.floor(Math.random() * 9);   
img = ('<img src="img/'+random_int+'.jpg" border="0" width="450px" />');
document.getElementById("images").innerHTML = img;