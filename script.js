// JavaScript Document
function openFoto1(){
			document.getElementById("Letter").style.top = "-80vh";
			document.getElementById("Letter").style.bottom = "85vh";
			document.getElementById("Session").style.bottom = "115vh";
			document.getElementById("Session").style.zIndex = "0";
			document.getElementById("close").style.opacity = "1";
			document.getElementById("close").style.zIndex = "1";
			document.getElementById("close").style.bottom = "115vh";
			var x = document.getElementsByClassName("DivFotografo");
			x[0].style.display = "inline-block";
			x[1].style.display = "inline-block";
			x[2].style.display = "inline-block";

}

function opacity(){
			var x = document.getElementsByClassName("DivFotografo");
			x[0].style.opacity = "1";
			x[1].style.opacity = "1";
			x[2].style.opacity = "1";
}

function closeFoto1(){
			document.getElementById("Letter").style.top = "0";
			document.getElementById("Letter").style.bottom = "20vh";
			document.getElementById("Session").style.bottom = "0";
			document.getElementById("Session").style.zIndex = "1";
			document.getElementById("close").style.opacity = "0";
			document.getElementById("close").style.bottom = "0vh";
			document.getElementById("close").style.zIndex = "0";
			var x = document.getElementsByClassName("DivFotografo");
			x[0].style.opacity = "0";
			x[1].style.opacity = "0";
			x[2].style.opacity = "0";
}

function closeDiv1(){
			var x = document.getElementsByClassName("DivFotografo");
			x[0].style.display = "none";
			x[1].style.display = "none";
			x[2].style.display = "none";
}
