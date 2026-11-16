HTML file : 

<!DOCTYPE html> 
<html lang="en"> 
<head> 
<meta charset="UTF-8"> 
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>Experiment-8b</title> 
</head> 
<body> 
<h1>Experiment-8b</h1> 
<p> In this Program we are going to change the Background color of document when onfocus event 
is occured</p> 
<h2>Student Information Form</h2> 
<form id="myForm"> 
<label> Student Name: <input type="text" id="myInput">  </label> 
</form> 
</body> 
<script src="Exp9b.js"></script> 
</html> 


JavaScript File :  

var x = document.getElementById("myForm"); 
x.addEventListener("focus", myFocusFunction, true); 
x.addEventListener("blur", myBlurFunction, true); 
function myFocusFunction() { 
document.getElementById("myInput").style.backgroundColor = "yellow"; 
} 
function myBlurFunction() { 
document.getElementById("myInput").style.backgroundColor = ""; 
}      
